import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from "rxjs";
import { tap, scan, take } from 'rxjs/operators';

// Options to reproduce firestore queries consistently
interface QueryConfig {
  path: string; // path to collection
  field: string; // field to orderBy
  initialFetch?: number; // limit per query
  limit?: number; // limit per query
  reverse?: boolean; // reverse order?
  prepend?: boolean; // prepend to source?
}

@Injectable()
export class PaginationService {
  // Source data
  private _done = new BehaviorSubject(false);
  private _loading = new BehaviorSubject(false);
  private _data = new BehaviorSubject([]);
  private query: QueryConfig;

  // Observable data
  data: Observable<any>;
  done: Observable<boolean> = this._done.asObservable();
  loading: Observable<boolean> = this._loading.asObservable();

  constructor(private afs: AngularFirestore) {}

  // Initial query sets options and defines the Observable
  init(path, field, opts?) {
    this.query = {
      path,
      field,
      initialFetch: 13,
      limit: 5,
      reverse: true,
      prepend: false,
      ...opts,
    };

    const initialQuery = this.afs.collection(this.query.path, (ref) =>
      ref.orderBy(this.query.field, this.query.reverse ? 'desc' : 'asc')
        .limit(this.query.initialFetch)
    );

    this.mapAndUpdate(initialQuery);

    // Create the observable array for consumption in components
    this.data = this._data.asObservable().pipe(scan((acc, val) => {
      return this.query.prepend ? val.concat(acc) : acc.concat(val);
    }));
  }

  // Retrieves additional data from firestore
  more() {
    const cursor = this.getCursor();

    const moreQuery = this.afs.collection(this.query.path, (ref) =>
      ref.orderBy(this.query.field, this.query.reverse ? 'desc' : 'asc')
        .limit(this.query.limit)
        .startAfter(cursor)
    );
    this.mapAndUpdate(moreQuery);
  }

  // Reset the page
  reset() {
    this._data.next([]);
    this._done.next(false);
    this._loading.next(false);
  }

  // Determines the doc snapshot to paginate query
  private getCursor() {
    const current = this._data.value;
    if (current.length) {
      return this.query.prepend
        ? current[0].doc
        : current[current.length - 1].doc;
    }
    return null;
  }

  // Maps the snapshot to usable format the updates source
  private mapAndUpdate(fsCollection: AngularFirestoreCollection<any>) {
    // If loading or no more data, return
    if (this._done.value || this._loading.value) {
      return;
    }

    // Set loading to true, data incoming...
    this._loading.next(true);

    // Map snapshot with doc ref (needed for cursor)
    return fsCollection
      .snapshotChanges()
      .pipe(tap((arr) => {
        let values = arr.map((snap) => {
          const data = snap.payload.doc.data();
          const doc = snap.payload.doc;
          return { ...data, doc };
        });
        // Reverse array if prepend option is on
        values = this.query.prepend ? values.reverse() : values;

        // Update source with new data, loading has now finished
        this._data.next(values);
        this._loading.next(false);

        // Mark done if no more data available
        if (!values.length) {
          this._done.next(true);
        }
      }))
      .pipe(take(1))
      .subscribe();
  }
}

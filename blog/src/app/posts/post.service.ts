import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Post } from './post';

@Injectable()
export class PostService
{
  private postsLimit = 13;
  private postsCollection: AngularFirestoreCollection<Post>;
  private postDocument: AngularFirestoreDocument<Post>;
  private firstLoadedDocument: AngularFirestoreDocument<Post>;
  private lastLoadedDocument: AngularFirestoreDocument<Post>;

  constructor(private afs: AngularFirestore)
  {
    this.postsCollection = this.afs.collection<Post>('posts',
      ref => ref.orderBy('datePublished', 'desc')
                .limit(this.postsLimit)
    );
  }

  getPosts()
  {
    return this.postsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Post;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getPost(id: string)
  {
    return this.afs.doc<Post>(`posts/${id}`);
  }

  getPostData(id: string)
  {
    this.postDocument = this.getPost(id);
    return this.postDocument.valueChanges();
  }

  create(data: Post)
  {
    this.postsCollection.add(data);
  }

  update(id: string, data)
  {
    return this.getPost(id).update(data);
  }

  delete(id: string)
  {
    return this.getPost(id).delete();
  }
}

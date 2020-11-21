import { Timestamp } from '@firebase/firestore-types';

export class Post {
  id?: string;
  author: {
    id: string,
    name: string,
    photoUrl: string
  };
  title: string;
  heroImageUrl: string;
  contentUrl: string;
  dateCreated: Date = new Date();
  dateUpdated: Date = null;
  datePublished: Date = null;
  keywords: [];

  constructor(values: Object = {})
  {
    Object.assign(this, values);
  }
}

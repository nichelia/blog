export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyBqhWmyE6wA6aIXcBMUtO2it4YNbsbNqNI",
    authDomain: "nichelia-blog.firebaseapp.com",
    databaseURL: "https://nichelia-blog.firebaseio.com",
    projectId: "nichelia-blog",
    storageBucket: "nichelia-blog.appspot.com",
    messagingSenderId: "75862185697",
    appId: "1:75862185697:web:d6cef1a9f8fdb253dd89a0",
    measurementId: "G-T74JEPTJX1"
  }
};

export function firebaseAppNameFactory() {
  return environment.firebase.projectId;
};

export const authRoute = 'auth';
export const unauthorisedRoute = '403';
export const authorisedRoute = 'admin';

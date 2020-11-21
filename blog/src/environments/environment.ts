// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
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
export const authorisedRoute = 'home';

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

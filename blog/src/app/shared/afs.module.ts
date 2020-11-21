import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { environment } from '../../environments/environment';
import { firebaseAppNameFactory } from '../../environments/environment';

const afsModules = [
  AngularFireModule.initializeApp(environment.firebase),
  AngularFireStorageModule,
  AngularFirestoreModule.enablePersistence(),
  NgxAuthFirebaseUIModule.forRoot(
    environment.firebase,
    firebaseAppNameFactory,
    {
      enableFirestoreSync: true,
      toastMessageOnAuthSuccess: false,
      toastMessageOnAuthError: false,
      guardProtectedRoutesUntilEmailIsVerified: true,
    }
  ),
];

@NgModule({
  imports: [afsModules],
  exports: [afsModules]
})
export class AfsModule { }

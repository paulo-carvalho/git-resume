import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

//*********** ionic Native **************/
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';

//***********  Angularfire2 v5 **************/

import { AngularFireModule } from 'angularfire2';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';

//***********  Facebook **************/
import { Facebook } from '@ionic-native/facebook';
//***********  Google plus **************/
import { GooglePlus } from '@ionic-native/google-plus';

//*********** Provider **************/
import { AuthData } from '../providers/auth-data';
import { RadioPlayer } from '../providers/radio-service';


//************** import image gallery *********************//

import * as ionicGalleryModal from 'ionic-gallery-modal';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';


//********** firebase configuration  ************ */
export const config = { 
  apiKey: 'your-key',
  authDomain: 'your-project-authdomain', 
  databaseURL: 'your-database-URL', 
  projectId: 'your-project-id', 
  storageBucket: 'your-storage-bucket', 
  messagingSenderId: 'your-messaging-sender-id' 
};
  
@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    ionicGalleryModal.GalleryModalModule,
    IonicModule.forRoot(MyApp),
  
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: ionicGalleryModal.GalleryModalHammerConfig,
    },
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthData,
    Facebook,
    RadioPlayer,
    Facebook,
    GooglePlus
  ]
})
export class AppModule {}

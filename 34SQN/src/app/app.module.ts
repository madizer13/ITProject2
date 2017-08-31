import {AngularFireModule} from 'angularfire2';
import { AuthProvider } from './../providers/auth/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { FormsModule } from '@angular/forms';

import { MyApp, firebaseConfig } from './app.component';
import { HomePage } from '../pages/home/home';

import { DatabaseProvider } from '../providers/database/database';
import { ImageProvider } from '../providers/image/image';
import { PreloaderProvider } from '../providers/preloader/preloader';
import {  AngularFireAuth } from 'angularfire2/auth';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
     AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Image,
    DatabaseProvider,
    ImageProvider,
    PreloaderProvider,AngularFireAuth,
    AuthProvider
  ]
})
export class AppModule {}
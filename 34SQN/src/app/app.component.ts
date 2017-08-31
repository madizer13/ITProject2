
import {  AngularFireModule} from 'angularfire2';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase/app';
import { HomePage } from '../pages/home/home';

import { AngularFireAuth } from 'angularfire2/auth';
export const firebaseConfig = {
  apiKey: "AIzaSyCpst7AX-bRy0ATHHYdScBsoK90Fd42G2E",
    authDomain: "sqn-981ba.firebaseapp.com",
    databaseURL: "https://sqn-981ba.firebaseio.com",
    projectId: "sqn-981ba",
    storageBucket: "sqn-981ba.appspot.com",
    messagingSenderId: "855092342498"
  };




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform,
    afAuth: AngularFireAuth,
     statusBar: StatusBar, splashScreen: SplashScreen) {
    afAuth.authState.subscribe((auth) => {
      if (!auth) {
        this.rootPage = 'login';

      } else { 
        this.rootPage = HomePage;
      }
    });
    
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here we can do any higher level native things we might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    AngularFireModule.initializeApp(firebaseConfig, 'Myapp')
   // firebase.initializeApp(firebaseConfig);
  }
}


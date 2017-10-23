import { Component } from '@angular/core';
import { NavController, ModalController, Platform } from 'ionic-angular';
import { AngularFireDatabase,  FirebaseListObservable} from 'angularfire2/database';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase/app';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   public Flight   : FirebaseListObservable<any[]>;


   constructor(public navCtrl    : NavController,
               private angFire   : AngularFireDatabase,
               private modalCtrl : ModalController,
               private platform  : Platform)
   {

   }

   addRecord()
   {
      let modal = this.modalCtrl.create('Modals');
      modal.present();
   }

   logout() { 
    let nav = this.navCtrl.setRoot('login');    
  }
  search() { 
    let nav = this.navCtrl.setRoot('search');    
  }

  
   statistics(){

    let nav= this.navCtrl.setRoot('statistics');
   }
    settings(){
    let nav= this.navCtrl.setRoot('settings');

    }
    addcrew()
    {
      let nav= this.navCtrl.setRoot('addCrew');
    }

  updateCurrencies()
  {
    let nav = this.navCtrl.setRoot('updateCurrencies')
  }


   deleteFlight(movie : any)
   {
      this.Flight.remove(movie);
   }
  
}



import { Component } from '@angular/core';
import { NavController, ModalController, Platform } from 'ionic-angular';
import { AngularFireDatabase,  FirebaseListObservable} from 'angularfire2/database';
//import { AngularFireModule } from 'angularfire2';
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



   ionViewDidLoad()
   {
      this.platform.ready()
      .then(() =>
      {
         this.Flight= this.angFire.list('/flights');
      });
   }



   addRecord()
   {
      let modal = this.modalCtrl.create('Modals');
      modal.present();
   }



   editFlight(flight)
   {
      let params = { flight: flight, isEdited: true },
          modal  = this.modalCtrl.create('Modals', params);

      modal.present();
   }



   deleteFlight(movie : any)
   {
      this.Flight.remove(movie);
   }

}
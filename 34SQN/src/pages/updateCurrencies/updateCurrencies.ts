import { Modals } from './../addflight/modals';
import firebase from 'firebase/app';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { HomePage } from './../home/home';
//import { name } from 'ionic/dist';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform } from 'ionic-angular';



@IonicPage({
name: 'updateCurrencies'
})
@Component({
selector: 'page-updateCurrencies',
templateUrl: 'updateCurrencies.html',

})

//CURRENTLY COPIED FROM THE SEARCH FUNCTION PAGE, MAKING CHANGES TO SEARCH CURRENCIES INSTEAD OF FLIGHTS
export class UpdateCurrencies {
  public people: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController,
        private modalCtrl: ModalController,
        public params: NavParams,
        private db: AngularFireDatabase,
        private platform: Platform,
  ) {
      this.getPeople();
  }

  getPeople(): FirebaseListObservable<any> {
      return this.db.list('/Data/Person/', {
          query: {
              orderByChild: 'Name'
          }
      });
  }




goBack(): void {
     this.navCtrl.setRoot(HomePage);
}
}

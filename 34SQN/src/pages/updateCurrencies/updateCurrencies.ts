import { Modals } from './../addflight/modals';
import firebase from 'firebase/app';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { HomePage } from './../home/home';
//import { name } from 'ionic/dist';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform, AlertController, ActionSheetController } from 'ionic-angular';



@IonicPage({
name: 'updateCurrencies'
})
@Component({
selector: 'page-updateCurrencies',
templateUrl: 'updateCurrencies.html',

})

export class UpdateCurrencies {
  public people: FirebaseListObservable<any>;
  public selectedPerson: FirebaseObjectObservable<any>;
  constructor(public navCtrl: NavController,
        private modalCtrl: ModalController,
        public params: NavParams,
        private db: AngularFireDatabase,
        private platform: Platform,
        public alertCtrl: AlertController,
        public actionSheetCtrl: ActionSheetController
  ) {
      this.people = db.list('/Data/Person/');
  }

  changeCurrencies(personID, personName)
  {
    let actionSheet = this.actionSheetCtrl.create({
    title: 'What do you want to do?',
    buttons: [
      {
        text: 'View LogBook',
        role: 'destructive',
        handler: () => {
          console.log("done1");
        }
      },{
        text: 'Update Currencies',
        handler: () => {
          console.log("done2");
        }
      },{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  actionSheet.present();
  }
goBack(): void {
     this.navCtrl.setRoot(HomePage);
}
}

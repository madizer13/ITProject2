import { Modals } from './../addflight/modals';
import firebase from 'firebase/app';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { HomePage } from './../home/home';
//import { name } from 'ionic/dist';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform, AlertController, ActionSheetController } from 'ionic-angular';

@IonicPage({
  name: 'chooseperson'
})
@Component({
  selector: 'page-chooseperson',
  templateUrl: 'chooseperson.html',

})

export class Chooseperson {
  public people: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController,
    private modalCtrl: ModalController,
    public params: NavParams,
    private db: AngularFireDatabase,
    private platform: Platform,
    public alertCtrl: AlertController,
    public actionSheetCtrl: ActionSheetController
  ) {
    this.initializePeople();
  }

  selectOption(personKey, personName, personRole) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'What do you want to do for ' + personName + '?',
      buttons: [
        {
          text: 'View LogBook',
          role: 'destructive',
          handler: () => {
            console.log("done1");
          }
        }, {
          text: 'View Currencies',
          handler: () => {
            console.log("done1");
          }
        }, {
          text: 'Update Currencies',
          handler: () => {
            this.updateCurrencies();
          }
        }, {
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

  initializePeople(){
    this.people = this.db.list('/Data/Person/');
  }

  // getPeople(ev: any) {
  //   this.initializePeople();

  //   // set val to the value of the searchbar
  //   let val = ev.target.value;

  //   // if the value is an empty string don't filter the items
  //   if (val && val.trim() != '') {
  //     this.people = this.people.filter((item) => {
  //       return (this.people.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //     })
  //   }
  // }

  updateCurrencies(){
    let nav = this.navCtrl.setRoot('updateCurrencies');
  }

  goBack():void{
    this.navCtrl.setRoot(HomePage);
  }
}

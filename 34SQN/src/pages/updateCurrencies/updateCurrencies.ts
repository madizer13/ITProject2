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

export class UpdateCurrencies {
    constructor(public navCtrl: NavController) { }

    goBack(): void {
        this.navCtrl.setRoot(HomePage);
    }



}

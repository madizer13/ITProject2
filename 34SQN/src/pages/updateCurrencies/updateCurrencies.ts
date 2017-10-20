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
    public currencies: FirebaseListObservable<any>;
    constructor(public navCtrl: NavController,
        private modalCtrl: ModalController,
        public params: NavParams,
        private db: AngularFireDatabase,
        private platform: Platform,
        public alertCtrl: AlertController,
        public actionSheetCtrl: ActionSheetController
    ) {
        this.initializeCurrencies();
    }

    // enterDate() {
    //     var now = new Date(),
    //         max = new Date(now.getFullYear() + 100, now.getMonth(), now.getDate());

    //     var instance = mobiscroll.date('#demo', {
    //         theme: 'ios',
    //         display: 'bottom',
    //         max: max
    //     }
    initializeCurrencies() {
        this.currencies = this.db.list('/Data/Currency/');
    }

    goBack(): void {
        this.navCtrl.push(HomePage);
    }

}

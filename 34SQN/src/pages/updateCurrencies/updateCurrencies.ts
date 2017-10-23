import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';

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
        public params: NavParams,
        private db: AngularFireDatabase,
        public alertCtrl: AlertController,
        public actionSheetCtrl: ActionSheetController
    ) {
        this.initializeCurrencies();
    }

    initializeCurrencies() {
        this.currencies = this.db.list('/Data/Currency/');
    }

    goBack(): void {
        this.navCtrl.push(HomePage);
    }

}

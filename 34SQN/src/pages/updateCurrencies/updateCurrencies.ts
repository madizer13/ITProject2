import { Modals } from './../addflight/modals';
import firebase from 'firebase/app';
import { AngularFireDatabaseModule, FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { HomePage } from './../home/home';
//import { name } from 'ionic/dist';
import { AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, Platform } from 'ionic-angular';

@IonicPage({
    name: 'updateCurrencies'
})
@Component({
    selector: 'page-updateCurrencies',
    templateUrl: 'updateCurrencies.html',
})

export class UpdateCurrencies {
    constructor(
        public navCtrl: NavController,
        public alertCtrl: AlertController) { }
    /*
    constructor(
        public navCtrl: NavController,
        public params: NavParams,
        private modalCtrl: ModalController,
        private _FB: FormBuilder,
        private _FIRE: AngularFireDatabase,
        public viewCtrl: ViewController
    ) {
        this.form = _FB.group({
            'summary': [''],
            'year': ['', Validators.required],
            'duration': ['', Validators.required],
            'type': ['', Validators.required],
            'nightflight': ['false'],
            'vip': ['false'],
            'flightID': ['', Validators.required],
            'arrivalAirport': ['', Validators.required],
            'departureAirport': ['', Validators.required]
        });
        this.flights = this._FIRE.list('/Data/Flight');
        this.userProfile = firebase.database().ref('/Data/Flight');
    }*/

    presentPrompt() {
        const alert = this.alertCtrl.create({
            title: 'Currency Obtained',
            inputs: [
                {
                    name: 'currencyName',
                    placeholder: 'Currency Name'
                },
                {
                    name: 'password',
                    placeholder: 'Password',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Login',
                    handler: data => {
                        if (0==0){//(User.isValid(data.username, data.password)) {
                            // logged in!
                        } else {
                            // invalid login
                            return false;
                        }
                    }
                }
            ]
        });
        alert.present();
    }

    goBack(): void {
        this.navCtrl.setRoot('chooseperson');
    }

}

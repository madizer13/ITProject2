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
    public Flight: FirebaseListObservable<any[]>;
    title: any;

    constructor(public navCtrl: NavController,
        private modalCtrl: ModalController,
        public params: NavParams,
        private databa: AngularFireDatabase,
        private platform: Platform,
    ) {
        this.Flight = databa.list('/random');

        if (params.get('isEdited')) {
            let flight = params.get('flight'),
                Flight = {
                    name: 'flight',
                    date: 'Select date',
                    duration: 'hours'
                };
        }

        var ref = firebase.database().ref("flight");
        //ref.orderByKey().endAt("23").on("child_added"), function (snapshot){
        //console.log(snapshot.key);
        // };

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SearchPage');
        this.platform.ready()
            .then(() => {
                this.Flight = this.databa.list('/title');
            });

    }
 

    goBack(): void {
        this.navCtrl.setRoot(HomePage);
    }

}

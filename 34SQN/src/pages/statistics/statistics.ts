import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage({
    name: 'statistics'
  })
  @Component({
    selector: 'page-statistics',
    templateUrl: 'statistics.html',
  })
  export class Statistics {
  
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad SearchPage');
    }

    goBack():void{
      this.navCtrl.setRoot(HomePage);
    }
}
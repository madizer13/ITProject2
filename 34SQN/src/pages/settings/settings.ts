import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage({
  name:'settings'
})
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
<<<<<<< HEAD
  addcurrency() { }

  addperson() {
    let nav = this.navCtrl.setRoot('addperson');
  }

=======
  addcurrency(){}
  addperson() {
      let nav = this.navCtrl.setRoot('addperson');
  }
>>>>>>> 6a0b3dac72257d20fe04594b603ddcd0fc8a9065
  goBack():void{
    this.navCtrl.setRoot(HomePage);
  }
}

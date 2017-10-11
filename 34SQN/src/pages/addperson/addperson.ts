import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the AddpersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addperson',
  templateUrl: 'addperson.html',
})
export class AddpersonPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goBack():void{
    this.navCtrl.setRoot(SettingsPage);
  }

}

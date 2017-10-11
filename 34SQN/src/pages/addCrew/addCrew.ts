import { HomePage } from './../home/home';

import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';


@IonicPage(
    {
        name:'addCrew'
    }
)
@Component({
  selector: 'page-addCrew',
  templateUrl: 'addCrew.html'
})
export class AddCrew {

   public form              : any;
   public flights          : FirebaseListObservable<any[]>;
   public shiftSelect       : any     = [];
   public crewpilot         :any    =[];
    public First: any='';

   constructor(
      public navCtrl        : NavController,
      public params         : NavParams,
      private _FB 	        : FormBuilder,
      private _FIRE         : AngularFireDatabase,
      public viewCtrl       : ViewController
   )
   
   {
      this.form =   _FB.group({
         'shift':   ['',Validators.required],
         'crew' :   ['',Validators.required],
         'first':['']
      });

      this.flights = this._FIRE.list('/Data/PilotFlight');
    
    }



   saveCrew(value)
    {}


   closeModal()
   {
      this.navCtrl.setRoot(HomePage);
   }
   goBack():void{
    this.navCtrl.setRoot('Modals');
  }

}
/*
 <ion-item>
            <ion-label stacked> Night </ion-label>
            <ion-select formControlName="shift" multiple="false" [(ngModel)]="shiftSelect">
                <ion-option value="1ST"> 1ST </ion-option>
                <ion-option value="2ND"> 2ND </ion-option>
                <ion-content value="Dual">Dual</ion-content>
            </ion-select>
        </ion-item>

        <ion-item>
            <ion-label stacked> Day </ion-label>
            <ion-select formControlName="shift" multiple="false" [(ngModel)]="shiftSelect">
                <ion-option value="1ST"> 1ST </ion-option>
                <ion-option value="2ND"> 2ND </ion-option>
                <ion-content value="Dual">Dual</ion-content>
            </ion-select>
        </ion-item>

*/
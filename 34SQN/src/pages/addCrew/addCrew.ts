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
   public First: any = '';

   public CapFirstNight: number = 0;
   public CapSecondNight: number = 0;
   public CapDualNight: number = 0;
   public CaTakeoffNight: number = 0;
   public CapLandingNight: number = 0;
   public CapILSNight: number = 0;
   public CapVORNight: number = 0;
   public CapNDBNight: number = 0;
   public CapCirclingNight: number = 0;
   public CapNoSlopeNight: number = 0;
   public CapFirstDay: number = 0;
   public CapSecondDay: number = 0;
   public CapDualDay: number = 0;
   public CaTakeoffDay: number = 0;
   public CapLandingDay: number = 0;
   public CapILSDay: number = 0;
   public CapVORDay: number = 0;
   public CapNDBDay: number = 0;
   public CapCirclingDay: number = 0;
   public CapNoSlopeDay: number = 0;

   public coFirstNight: number = 0;
   public coSecondNight: number = 0;
   public coDualNight: number = 0;
   public coTakeoffNight: number = 0;
   public coLandingNight: number = 0;
   public coILSNight: number = 0;
   public coVORNight: number = 0;
   public coNDBNight: number = 0;
   public coCirclingNight: number = 0;
   public coNoSlopeNight: number = 0;
   public coFirstDay: number = 0;
   public coSecondDay: number = 0;
   public coDualDay: number = 0;
   public coTakeoffDay: number = 0;
   public coLandingDay: number = 0;
   public coILSDay: number = 0;
   public coVORDay: number = 0;
   public coNDBDay: number = 0;
   public coCirclingDay: number = 0;
   public coNoSlopeDay: number = 0;

   public crew: any = ' ';

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

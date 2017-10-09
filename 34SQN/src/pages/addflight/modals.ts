
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, ModalController, ViewController, NavParams } from 'ionic-angular';
import firebase from 'firebase/app';

@IonicPage(
    {
        name:'Modals'
    }
)
@Component({
  selector: 'page-modals',
  templateUrl: 'modals.html'
})
export class Modals {

   public form              : any;
   public flights: FirebaseListObservable<any[]>;
   public pilotName         : any     = '';
   public flighttype        : any     = [];
   public flightDuration    : any     = '';
   public flightSummary     : any     = '';
   public flyYear           : any     = '';
   public flightRaating     : any     = '';
   public FlightId          : any     = '';
   public AAirport          : any     = '';
   public DAirport          : any     = '';
   public aType             : any     = [];
   public tType             : any     = [];
   public lType             : any     = [];
    
   public isEditable        : boolean = false;
   public iterator          : number  = 1;
   public userProfile: firebase.database.Reference;


   constructor(
      public navCtrl        : NavController,
      public params: NavParams,
      private modalCtrl: ModalController,
      private _FB 	        : FormBuilder,
      private _FIRE         : AngularFireDatabase,
      public viewCtrl: ViewController
   )
   {
      this.form 	    = _FB.group({
         'summary' 	        : ['', Validators.minLength(10)],
         'year' 	          : ['', Validators.required],
         'duration'	        : ['', Validators.required],
         'type'             : ['', Validators.required],
         'nightflight'      : ['false'],
         'vip'              : ['false'],
         'flightID'         : [''],
         'arrivalAirport'   : [''],
         'departureAirport' : [''],
         'approachType'     : [''],
         'takeOffType'      : [''],
         'landingType'      : ['']
      });
      this.flights = this._FIRE.list('/Data/Flight');
      this.userProfile = firebase.database().ref('/Data/Flight');
             
   }

   saveMovie(value)
   {
       let summary            : string = this.form.controls["summary"].value,
           type               : string = this.form.controls["type"].value,
           duration           : string = this.form.controls["duration"].value,
           year               : string = this.form.controls["year"].value,
           vip                : boolean = this.form.controls["vip"].value,
           nightflight        : boolean = this.form.controls["nightflight"].value,
           flightID           : string = this.form.controls["flightID"],
           arrivalAirport     : string = this.form.controls["arrivalAirport"],
           departureAirport   : string = this.form.controls["departureAirport"],
           approachtype       : string = this.form.controls["approachType"],
           takeOffType        : string = this.form.controls["takeOffType"],
           landingType        : string = this.form.controls["landingType"]

      this.flights.push({
          DepartureDTG: year,
          ArrivalDTG: duration,
          Platform: type,
          WeatherSummary: summary,
          VIP: vip,
          NightFlight: nightflight,
          //ApproachType: approachtype,
          //ArrivalAirport: arrivalAirport,
          //FlightID: flightID,
          //DepartureAirport: departureAirport,
          //LandingType: landingType,
          //TakeoffType: takeOffType
      })
      
      this.closeModal();
      this.addCrew();
   }

   addCrew()
   {
       let nav = this.navCtrl.setRoot('addCrew');
   }
    
   closeModal()
   {
      this.viewCtrl.dismiss();
   }
}


import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, ModalController, ViewController, NavParams } from 'ionic-angular';
import firebase from 'firebase/app';
import { HomePage } from '../home/home';

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
   public pilots: FirebaseListObservable<any[]>;
   public crew: FirebaseListObservable<any[]>;
   public shiftSelect       : any     = [];
   public crewpilot         :any    =[];

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
   public CapTakeoffDay: number = 0;
   public CapLandingDay: number = 0;
   public CapILSDay: number = 0;
   public CapVORDay: number = 0;
   public CapNDBDay: number = 0;
   public CapCirclingDay: number = 0;
   public CapNoSlopeDay: number = 0;  

   public CoFirstNight: number = 0;
   public CoSecondNight: number = 0;
   public CoDualNight: number = 0;
   public CoTakeoffNight: number = 0;
   public CoLandingNight: number = 0;
   public CoILSNight: number = 0;
   public CoVORNight: number = 0;
   public CoNDBNight: number = 0;
   public CoCirclingNight: number = 0;
   public CoNoSlopeNight: number = 0;
   public CoFirstDay: number = 0;
   public CoSecondDay: number = 0;
   public CoDualDay: number = 0;
   public CoTakeoffDay: number = 0;
   public CoLandingDay: number = 0;
   public CoILSDay: number = 0;
   public CoVORDay: number = 0;
   public CoNDBDay: number = 0;
   public CoCirclingDay: number = 0;
   public CoNoSlopeDay: number = 0;

   
   public userProfile: firebase.database.Reference;
   constructor(
     public navCtrl: NavController,
     public params: NavParams,
     private modalCtrl: ModalController,
     private _FB: FormBuilder,
     private _FIRE: AngularFireDatabase,
     public viewCtrl: ViewController
   )
   
   {
    
     this.form = _FB.group({
       'shift': [''],
       'crew': [''],
       'capFirstNight': ['', Validators.required],
       'capDualNight': ['', Validators.required],
       'capTakeoffNight': ['', Validators.required],
       'capLandingNight': ['', Validators.required],
       'capSecondNight': ['', Validators.required],
       'capVORNight': ['', Validators.required],
       'capNDBNight': ['', Validators.required],
       'capILSNight': ['', Validators.required],
       'capCirclingNight': ['', Validators.required],
       'capNoSlopeNight': ['', Validators.required],
       'capFirstDay': ['', Validators.required],
       'capSecondDay': ['', Validators.required],
       'capDualDay': ['', Validators.required],
       'capTakeoffDay': ['', Validators.required],
       'capLandingDay': ['', Validators.required],
       'capILSDay': ['', Validators.required],
       'capVORDay': ['', Validators.required],
       'capNDBDay': ['', Validators.required],
       'capCirclingDay': ['', Validators.required],
       'capNoSlopeDay': ['', Validators.required],
       'coFirstNight': ['', Validators.required],
       'coSecondNight': ['', Validators.required],
       'coDualNight': ['', Validators.required],
       'coTakeoffNight': ['', Validators.required],
       'coLandingNight': ['', Validators.required],
       'coILSNight': ['', Validators.required],
       'coVORNight': ['', Validators.required],
       'coNDBNight': ['', Validators.required],
       'coCirclingNight': ['', Validators.required],
       'coNoSlopeNight': ['', Validators.required],
       'coFirstDay': ['', Validators.required],
       'coSecondDay': ['', Validators.required],
       'coDualDay': ['', Validators.required],
       'coTakeoffDay': ['', Validators.required],
       'coLandingDay': ['', Validators.required],
       'coILSDay': ['', Validators.required],
       'coVORDay': ['', Validators.required],
       'coNDBDay': ['', Validators.required],
       'coCirclingDay': ['', Validators.required],
       'coNoSlopeDay': ['', Validators.required]
      });

     this.pilots = this._FIRE.list('/Data/PilotFlight');
     this.crew = this._FIRE.list('/Data/CrewFlight');
     this.userProfile = firebase.database().ref('/Data/PilotFlight')
    }



   saveCrew(value)
   {
     let shift: string = this.form.controls["shift"].value,
       crew: string = this.form.controls["crew"].value,
       capFirstNight: string = this.form.controls["capFirstNight"].value,
       capDualNight: string = this.form.controls["capDualNight"].value,
       capTakeoffNight: string = this.form.controls["capTakeoffNight"].value,
       capLandingNight: string = this.form.controls["capLandingNight"].value,
       capSecondNight: string = this.form.controls["capSecondNight"].value,
       capVORNight: string = this.form.controls["capVORNight"].value,
       capNDBNight: string = this.form.controls["capNDBNight"].value,
       capILSNight: string = this.form.controls["capILSNight"].value,
       capCirclingNight: string = this.form.controls["capCirclingNight"].value,
       capNoSlopeNight: string = this.form.controls["capNoSlopeNight"].value,
       capFirstDay: string = this.form.controls["capFirstDay"].value,
       capSecondDay: string = this.form.controls["capSecondDay"].value,
       capDualDay: string = this.form.controls["capDualDay"].value,
       capTakeoffDay: string = this.form.controls["capTakeoffDay"].value,
       capLandingDay: string = this.form.controls["capLandingDay"].value,
       capILSDay: string = this.form.controls["capILSDay"].value,
       capVORDay: string = this.form.controls["capVORDay"].value,
       capNDBDay: string = this.form.controls["capNDBDay"].value,
       capCirclingDay: string = this.form.controls["capCirclingDay"].value,
       capNoSlopeDay: string = this.form.controls["capNoSlopeDay"].value,
       coFirstNight: string = this.form.controls["coFirstNight"].value,
       coSecondNight: string = this.form.controls["coSecondNight"].value,
       coDualNight: string = this.form.controls["coDualNight"].value,
       coTakeoffNight: string = this.form.controls["coTakeoffNight"].value,
       coLandingNight: string = this.form.controls["coLandingNight"].value,
       coILSNight: string = this.form.controls["coILSNight"].value,
       coVORNight: string = this.form.controls["coVORNight"].value,
       coNDBNight: string = this.form.controls["coNDBNight"].value,
       coCirclingNight: string = this.form.controls["coCirclingNight"].value,
       coNoSlopeNight: string = this.form.controls["coNoSlopeNight"].value,
       coFirstDay: string = this.form.controls["coFirstDay"].value,
       coSecondDay: string = this.form.controls["coSecondDay"].value,
       coDualDay: string = this.form.controls["coDualDay"].value,
       coTakeoffDay: string = this.form.controls["coTakeoffDay"].value,
       coLandingDay: string = this.form.controls["coLandingDay"].value,
       coILSDay: string = this.form.controls["coILSDay"].value,
       coVORDay: string = this.form.controls["coVORDay"].value,
       coNDBDay: string = this.form.controls["coNDBDay"].value,
       coCirclingDay: string = this.form.controls["coCirclingDay"].value,
       coNoSlopeDay: string = this.form.controls["coNoSlopeDay"].value

     this.pilots.push({
       PersonName: "Captain",
       RoleID: "1/3",
       FirstDay: capFirstDay,
       SecondDay: capSecondDay,
       DualDay: capDualDay,
       FirstNight: capFirstNight,
       SecondNight: capSecondNight,
       DualNight: capDualNight,
       DayLandings: capLandingDay,
       NightLandings: capLandingNight,
       TakeoffDay: capTakeoffDay,
       TakeoffNight: capTakeoffNight,
       FlightID: "Place Holder",
       ILSDay: capILSDay,
       ILSNight: capILSNight,
       VORDay: capVORDay,
       VORNight: capVORNight,
       NDBDay: capNDBDay,
       NDBNight: capNDBNight,
       CirclingDay: capCirclingDay,
       CirclingNight: capCirclingNight,
       NoSlopeDay: capNoSlopeDay,
       NoSlopeNight: capNoSlopeNight
     })

     this.pilots.push({
       PersonName: "Co-Pilot",
       RoleID: "2/4",
       FirstDay: coFirstDay,
       SecondDay: coSecondDay,
       DualDay: coDualDay,
       FirstNight: coFirstNight,
       SecondNight: coSecondNight,
       DualNight: coDualNight,
       DayLandings: coLandingDay,
       NightLandings: coLandingNight,
       TakeoffDay: coTakeoffDay,
       TakeoffNight: coTakeoffNight,
       FlightID: "Place Holder",
       ILSDay: coILSDay,
       ILSNight: coILSNight,
       VORDay: coVORDay,
       VORNight: coVORNight,
       NDBDay: coNDBDay,
       NDBNight: coNDBNight,
       CirclingDay: coCirclingDay,
       CirclingNight: coCirclingNight,
       NoSlopeDay: coNoSlopeDay,
       NoSlopeNight: coNoSlopeNight
     })

     this.crew.push({
       FlightID: "Place Holder",
       RoleID: "5",
       Duration: "Place Holder"
     })

     this.closeModal();
   }


   closeModal()
   {
      this.navCtrl.setRoot(HomePage);
   }
   goBack():void{
    this.navCtrl.setRoot('Modals');
  }

}

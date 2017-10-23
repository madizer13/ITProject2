import { HomePage } from './../home/home';

import { Component } from '@angular/core';
import { NavController,  ModalController,  Platform,  IonicPage,  AlertController,  NavParams} from 'ionic-angular';
import { AngularFireDatabase,  FirebaseListObservable} from 'angularfire2/database';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase/app';
import { FormBuilder } from '@angular/forms';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
@IonicPage({
    name:'showflight'
})
@Component({
  selector: 'page-showflight',
  templateUrl: 'showflight.html'
})
export class Showflight {
    public flight  : FirebaseListObservable<any[]>;
  public Date:any;
  public form:any;
  public test:any;
  public z:firebase.User;
  public k:firebase.database.Reference;
  public pers:any;
   constructor(public navCtrl    : NavController,
               private angFire   : AngularFireDatabase,
               private modalCtrl : ModalController,
               private platform  : Platform,  
               public params    : NavParams, 
               public alertCtrl: AlertController, 
               private db  : AngularFireDatabase,
               private formbuild: FormBuilder
            
            )
   {
   
    this.form =formbuild.group({
      'first':['']

    });
    this.flight=db.list('/Data/Flight/');
}


  getflight():firebase.database.Reference {

    return this.k;
  }
 



   search2(value):FirebaseListObservable<any[]>{
     this.flight = this.db.list('/Data/Flight',{
       query:{
         equalTo: (value)
       }
     });
     console.log(this.flight)
     return value.this.person
   }

   getFlight():FirebaseListObservable<any[]>{
    return this.db.list('/Data/Flight',{
      query: 
      {
        orderByChild: 'FlightID'
       } 
    });
 }

goBack():void{
    this.navCtrl.setRoot(HomePage);
  }
  
  
  
editFlight(key,ArrivalAirport,ArrivalDTG,DepartureAirport,
    DepartureDTG,FlightID,NighFlight,Platform,VIP ):firebase.Promise<void>
    {

const Ref: firebase.database.Reference = firebase.database().ref(`/Data/Flight/${key}`);

 return   this.flight.update(key,{
      ArrivalAirport:ArrivalAirport,
      ArrivalDTG:ArrivalDTG,
       DepartureAirport:DepartureAirport,
        DepartureDTG:DepartureDTG,
       FlightID:FlightID,
       NighFlight:NighFlight,
       Platform:Platform,
      VIP:VIP,
      });
    }
    
    
    
edit(key){
  var personRef = firebase.database().ref(`/Data/Flight/${key}`);
//let a:string,//=personRef.child('ArrivalAirport'),

         const Popover = this.alertCtrl.create({
          message: "update the flight",
          inputs: [
            {
              name: 'ArrivalAirport',
              placeholder: 'ArrivalAirport',
              //value: ArrivalAirport,
            },
           {
             name: 'ArrivalDTG',
           placeholder: 'DateTime',
          type:  'Date', 
          },
            {
              name: 'DepartureDTG',
             placeholder: 'DepartureDTG',
             type:  'Date', 
             },
             {
              name: 'FlightID',
             placeholder: 'FlightID',
            //value: DepartureAirport,
             },
             {
              name: 'DepartureAirport',
             placeholder: 'DepartureAirport',
            
             //value: DepartureAirport,
             },
             {
               name: 'WeatherSummary',
             placeholder: 'WeatherSummary',
            //value: DepartureAirport,
             },
             {
              name: 'NightFlight',
              type:'checkbox',
              checked:true,
              label:'Log GPS co-ords',
              value:"true"
            },
          ],
          
          buttons: [
            {
              text: 'Cancel',
            },
            {
              text: 'Save',
              handler: data => {
             if(data.ArrivalAirport!=''){
              personRef.update({
                
                                ArrivalAirport:data.ArrivalAirport});
             }
               if(data.ArrivalDTG!=''){
                personRef.update({
                  ArrivalDTG:data.ArrivalDTG,});
            
              }

              if(data.DepartureAirport!=''){
                personRef.update({
                  DepartureAirport:data.DepartureAirport,});
              
              
              }
              if(data.DepartureDTG!=''){
                personRef.update({
                  DepartureDTG:data.DepartureDTG,});
            
              }
              if(data.FlightID!=''){
                personRef.update({
                  FlightID:data.FlightID,});
              
              
              }
              if(data.WeatherSummary!=''){
                personRef.update({
                  WeatherSummary:data.WeatherSummary,});
              
              
              }
              /*
              personRef.update({

                ArrivalAirport:data.ArrivalAirport,
                ArrivalDTG:data.ArrivalDTG,
              DepartureAirport:data.DepartureAirport,
                DepartureDTG:data.DepartureDTG,
                FlightID:data.FlightID,
                WeatherSummary:data.WeatherSummary
               })*/
              }
            }
          ]
        });
        Popover.present();    

}

Update(){}
}
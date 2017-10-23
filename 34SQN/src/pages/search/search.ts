import { DateFormatter } from '@angular/common/src/pipes/intl';
import { Checkbox, DateTime, Select } from 'ionic-angular/umd';
import { checkBinding } from '@angular/core/src/view/util';
import * as angular from 'angular';
import { DatabaseSnapshot } from 'angularfire2/database/interfaces';
import {DatabaseProvider} from '../../providers/database/database';

import { FormBuilder } from '@angular/forms';
import { Modals } from './../addflight/modals';
import firebase  from 'firebase/app';
import { AngularFireDatabase, FirebaseListFactory, FirebaseListObservable } from 'angularfire2/database';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { AlertController, IonicPage, ModalController, NavController, NavParams, Platform, Popover } from 'ionic-angular';

@IonicPage({
  name: 'search'
})
@Component({
  selector: 'page-search',
  templateUrl: 'search.html', 
})
export class SearchPage {
  public person  : FirebaseListObservable<any[]>;
  updates:any;
  form :any;
  name:any;
  l:any;
  icons:any;
  public  k:string[]=[];
  public isEditable :false;
  public current:firebase.User;
  public data:firebase.database.Reference;
  
 
  public id:string='';
  public array:[100];
  
  constructor(public navCtrl   : NavController, 
              private modalCtrl: ModalController,
              public params    : NavParams, 
              public alertCtrl: AlertController, 
              private db  : AngularFireDatabase,
              private platform  : Platform,
              private formbuild: FormBuilder,
              private da:DatabaseProvider
             )
              {
                this.form =formbuild.group({
                  'first':['']
          
                })
            // firebase.database().ref(`/Data/Flight/${key}`/*`/userProfile/${user.uid}`*/)
       
               // this.person=this.db.list('Data/Flight');
             let first=this.form.controls['first'].value
               this.person= this.search(first);
              // this.person=this.search(this.updates)
              console.log(this.person) ; 
            }






ionViewDidLoad() {
    this.platform.ready()
    .then(() =>
    {
     this.getFlight()
    });   
  }
 
  getData():firebase.database.Reference{
    return this.data;
  }
 
  

 search(value):FirebaseListObservable<any[]>
 {
  let  first  : string=this.form.controls["first"].value,
     test  : any   =[],
     strings :String[]=[],
     keys: any,
     k:any;
     //this.person = this.db.list('/Data/Flight');
     var personRef: firebase.database.Reference = firebase.database().ref(`/Data/Flight`);
     personRef.on('value',snap=>{
       test=snap.val();
      });
     test;
     for(k in test){
       angular.forEach(test[k],function(value,key){
              'key='+key+',value='+value
            // strings[k]= test; 
               if(first==value){
                strings[k]= test[k];
                keys=k;
              //console.log(strings,keys[k]);
              //this.edit(key);
       // firebase.database().ref(`/Data/Flight/${key}`/*`/userProfile/${user.uid}`*/)
      
      
       return keys;
        }
       });console.log(keys);
     }  this.person=this.db.list(`/Data/Flight/${keys}`);
     
     
     if(keys){

     this.edit(keys);
     }return this.person;
  }
  
  


edit(k){
  var personRef = firebase.database().ref(`/Data/Flight/${k}`);

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
              
              }
            }
          ]
        });
        Popover.present();
}




updateName(key,
  ArrivalAirport:string,
  ArrivalDTG:string,
  DepartureAirport:string,
  DepartureDTG:string,
  FlightID:string,
  NighFlight:string,
  Platform:string,
  VIP:string,
  WeatherSummary:string,
): firebase.Promise<void> {
  return this.person.update(key,{
    key,
    ArrivalAirport:ArrivalAirport,
    ArrivalDTG:ArrivalDTG,
    DepartureAirport:DepartureAirport,
    DepartureDTG:DepartureDTG,
    FlightID:FlightID,
    NighFlight: NighFlight,
    Platform:Platform,
    VIP: VIP,
    WeatherSummary:WeatherSummary
  });
}

search2(value):FirebaseListObservable<any[]>{
  this.person = this.db.list('/Data/Flight',{
    query:{
      equalTo: (value)
    }
  });
  //console.log(this.person)
  return value.this.person
}

search1(value){
  console.log("TEST3");
  var dat=firebase.database();
  console.log("TEST2");
  var ref= ref.child('Data/Flight').orderByChild('FlighID').equalTo(value).on( "child_added", function(snapshot) 
   { snapshot.forEach(function(data)
     {//console.log(":"+ snapshot.val());
    
  });
});
   
 

  console.log("TEST "  )
}
search3(value):firebase.database.Reference{
const r:firebase.database.Reference=firebase.database().ref('/Data/Flight')

  this.person=this.db.list('/Data/Flight',{
    query:{

     orderByChild: value,
     equalTo:value
}
});

return r;
}


getFlight():FirebaseListObservable<any[]>{
     return this.person=this.db.list('Data/Flight',{
       query: 
       {
         orderByChild: 'FlightID'
        } 
     });
  }
 
 getFlightID(){
  const personRef: firebase.database.Reference = firebase.database().ref(`/Data/Flight`);
  
   this.db.list('Data/Flight/FlightID',{
     query: { orederByChild:'FlightID'}
   });
   return personRef.on('value',snap=>{
     this.array=snap.val();
    // this.eve
    console.log(this.array);
   })
 }
 


  editFlight (key,ArrivalAirport,ArrivalDTG,DepartureAirport,
  DepartureDTG,FlightID,NighFlight,Platform,VIP,WeatherSummary ) 
  {
    let  first  : string=this.form.controls["first"].value;
    const personRef: firebase.database.Reference = firebase.database().ref('/Data/Flight/');
   
   this.person.update(key,{
  
    ArrivalAirport:ArrivalAirport,
      ArrivalDTG:ArrivalDTG,
      DepartureAirport:DepartureAirport,
      DepartureDTG:DepartureDTG,
      FlightID:FlightID,
    });

  } 
  


  goBack():void{
    this.navCtrl.setRoot(HomePage);
  }

  go():void{
    this.navCtrl.setRoot('showflight');
  }
}
// <p *ngIf="pers.ArrivalDTG =='first'"> {{pers.FlightID}}</p>


/*
<ul>
        <li *ngFor="let pers of (person | async)" [class.done]="pers.done">
            {{pers.ArrivalAirport}}
            <button item-left ion-button (click)="editFlight(pers.$key,  pers.ArrivalAirport,pers.ArrivalDTG,pers.DepartureDTG,pers.FlightID,pers.NightFlight,pers.Platform,pers.VIP)">
            <ion-icon name="brush"></ion-icon>
            </button>
        </li>

    </ul>
*/
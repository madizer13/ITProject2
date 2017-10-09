
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';


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
   public flights           : FirebaseListObservable<any[]>;
   public pilotName         : any     = '';
   public flighttype        : any     = [];
   public flightDuration    : any     = '';
   public flightSummary     : any     = '';
   public crewpilot         : any     = [];
   public flyYear           : any     = '';
   public flightRaating     : any     = '';
   public flightId          : string  = '';
   public isEditable        : boolean = false;


   constructor(
      public navCtrl        : NavController,
      public params         : NavParams,
      private _FB 	        : FormBuilder,
      private _FIRE         : AngularFireDatabase,
      public viewCtrl       : ViewController
   )
   {
      this.form 	    = _FB.group({
         'summary' 	    : ['', Validators.minLength(10)],
         'year' 	    : ['', Validators.required],
         'name'         : ['', Validators.required],
         'duration'	    : ['', Validators.required],
         'flightRating'	    : ['', Validators.required],
         'type' 	    : ['', Validators.required],
         'crew' 	    : ['', Validators.required]
      });

      this.flights = this._FIRE.list('/flights');


      if(params.get('isEdited'))
      {
          let flight 		= params.get('flight'),
              k;

          this.pilotName        = flight.name;
          this.flightDuration	= flight.duration;
          this.flightSummary    = flight.summary;
          this.flightRaating   	= flight.rating;
          this.flyYear    	    = flight.year;
          this.flightId         = flight.$key;


          for(k in flight.type)
          {
             this.flighttype.push(flight.type[k].name);
          }


          for(k in flight.crew)
          {
             this.crewpilot.push(flight.crew[k].name);
          }

          this.isEditable      = true;
      }
   }



   saveMovie(value)
   {
      let title	             : string	= this.form.controls["name"].value,
          summary            : string 	= this.form.controls["summary"].value,
          flightRating       : number	= this.form.controls["flightRating"].value,
          type               : any      = this.form.controls["type"].value,
          crew               : any	    = this.form.controls["crew"].value,
          duration           : string	= this.form.controls["duration"].value,
          year               : string	= this.form.controls["year"].value,
          typesofFlight      : any       = [],
  	      people             : any       = [],
  	      k                  : any;


    for(k in type)
    {
       typesofFlight.push({
          "name" : type[k]
       });
    }


    for(k in crew)
    {
       people.push({
          "name" : crew[k]
       });
    }


   if(this.isEditable)
   {
      this.flights.update(this.flightId, {
         title    : title,
         summary  : summary,
         flightRating   : flightRating,
         duration : duration,
         type  : typesofFlight,
         crew   : people,
         year     : year
      });
   }
   else
   {
      this.flights.push({
       title   : title,
         summary  : summary,
         flightRating   : flightRating,
         duration : duration,
         type   : typesofFlight,
         crew   : people,
         year     : year
      });
   }

   this.closeModal();
   }



   closeModal()
   {
      this.viewCtrl.dismiss();
   }


}
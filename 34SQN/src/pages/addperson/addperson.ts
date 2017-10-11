import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController, ViewController } from 'ionic-angular';

@IonicPage({name: 'addperson'})
@Component({
  selector: 'page-addperson',
  templateUrl: 'addperson.html',
})
export class AddpersonPage {

  public form              : any;
  public Name              : any = '';
  public Role              : any = [];
  public person            : FirebaseListObservable<any[]>;

  public isEditable        : boolean = false;

  constructor(
    public navCtrl        : NavController, 
    private _FB 	        : FormBuilder,
    private _FIRE         : AngularFireDatabase,
    public viewCtrl       : ViewController

  ) 
  
  {
    this.form = _FB.group({
      'name'           : ['', Validators.required],
      'role'           : ['', Validators.required],
     
   });

   this.person = _FIRE.list('/Data/Person');
          
  }
  saveMovie(value)
  {
      let name               : string = this.form.controls["name"].value,
          role               : string = this.form.controls["role"].value
          

     this.person.push({
         Name: name,
         Role: role
         
     })
     
     this.closeAddperson();
     this.addperson();
  }

  addperson()
  {
      let nav = this.navCtrl.setRoot('addperson');
  }

  closeAddperson(){
    this.viewCtrl.dismiss();
  }
  

}

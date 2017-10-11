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
  public PersonID          : any = '';
  public RoleID              : any = [];
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
      'personID'       : ['',Validators.required],
      'roleID'           : ['', Validators.required],
     
   });

   this.person = _FIRE.list('/Data/Person');
          
  }
  saveMovie(value)
  {
      let name               : string = this.form.controls["name"].value,
          personID           : string = this.form.controls["porsonID"].value,
          roleID             : string = this.form.controls["role"].value
          

     this.person.push({
         Name: name,
         PersonID: personID,
         RoleID: roleID
         
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

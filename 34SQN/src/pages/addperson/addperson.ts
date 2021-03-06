import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';


@IonicPage({name: 'addperson'})
@Component({
  selector: 'page-addperson',
  templateUrl: 'addperson.html',
})
export class AddpersonPage {

  public form              : any;
  public Name              : any = '';
  public PersonID          : any = '';
  public PersonRoleID      : any = [''];
  public pers            : FirebaseListObservable<any[]>;
  

  constructor(
    public navCtrl        : NavController, 
    private _FB 	        : FormBuilder,
    private _FIRE         : AngularFireDatabase,
    public viewCtrl       : ViewController

  ) 
  
  {
    this.form = _FB.group({
      'name'           : ['',Validators.minLength(1) && Validators.maxLength(30)],
      'personID'       : ['',Validators.minLength(4) && Validators.maxLength(10)],
      'roleID'         : ['',Validators.minLength(1) && Validators.maxLength(6)],
     
   });

   this.pers = _FIRE.list('/Data/Person');

  }
  saveMovie(value)
  {
      let name               : string = this.form.controls["name"].value,
          personID           : any = this.form.controls["personID"].value,
          roleID             : any = this.form.controls["roleID"].value,
          k: any,
          roleIDs : string = '';
    
      for(k in roleID){
        if (k < roleID.length-1)
         roleIDs = roleIDs + roleID[k]+ ", " ;
        else if(k=roleID.length-1)
        roleIDs = roleIDs + roleID[k] ;
        else
          roleIDs = roleIDs + roleID[k]; 
      }
    
       
    if(name!='' && personID !=''&& roleID!=''){
       this.pers.push({
         Name: name,
         PersonID: personID,
         PersonRoleID: roleIDs,   
       })
      
    }
     
     this.goBack();
     
  }

  goBack():void{
    this.navCtrl.setRoot(SettingsPage)
  }

}

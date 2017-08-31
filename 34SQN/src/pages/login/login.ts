import { Component } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import * as firebase from 'firebase/app';
import { NgControl } from '@angular/forms/src/directives';
//import { Component } from 
import {
  IonicPage, 
  Loading,
  LoadingController, 
  NavController,
  AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { HomePage } from '../home/home';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage({
  name: 'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  
})
export class LoginPage {
  userProfile: any;
  //facebook: any;
  afAuth: any;
  ctrlName: any;
  hostFormGroup: any;
  public loginForm: FormGroup;
  loading: Loading;
 
 
  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController, 
    public alertCtrl: AlertController,
    public authProvider: AuthProvider, 
    public formBuilder: FormBuilder,
    afAuth: AngularFireAuth,

) {

      this.loginForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
        password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
      });
  } 
    logout() {
    this.afAuth.auth.logOut();
    this.navCtrl.setRoot(LoginPage);
    this.navCtrl.popToRoot();
  }
errorMessage() {
  // Find the control in the Host (Parent) form
  const ctrl: NgControl = this.hostFormGroup.directives
    .find(dir => dir.name === this.ctrlName);
  // ...
}

  loginUser(): void {
  if (!this.loginForm.valid){
    console.log(this.loginForm.value);
  } else {
    this.authProvider.loginUser(this.loginForm.value.email, 
        this.loginForm.value.password)
    .then( authData => {
      this.loading.dismiss().then( () => {
        this.navCtrl.setRoot(HomePage);
      });
    }, error => {
      this.loading.dismiss().then( () => {
        let alert = this.alertCtrl.create({
          message: error.message,
          buttons: [
            {
              text: "Ok",
              role: 'cancel'
            }
          ]
        });
        alert.present();
      });
    });
    this.loading = this.loadingCtrl.create();
    this.loading.present();
  }
  this.navCtrl.setRoot(HomePage)
}


goToSignup(): void { this.navCtrl.push('signup'); }

goToResetPassword(): void { this.navCtrl.push('reset-password'); }



}
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,ViewController } from 'ionic-angular';
import { FirebaseService } from './../../providers/firebase-service/firebase-service';
import { AngularFireList } from 'angularfire2/database';
import { AuthService } from './../../providers/auth-service/auth-service';
import { AlertController } from 'ionic-angular';
import { GlobalVarsProvider } from './../../providers/global-vars/global-vars';


@IonicPage()
@Component({
  selector: 'page-sign-in-modal',
  templateUrl: 'sign-in-modal.html',
})
export class SignInModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseService: FirebaseService, public authService: AuthService, public alertCtrl: AlertController, public globalVars: GlobalVarsProvider,public toastCtrl: ToastController,public viewCtrl: ViewController) { }

  public userList;
  userInputDetails = {
    emailID: '',
    password: ''
  };

  error1: string[];

  public signInApproved() {
    this.viewCtrl.dismiss();
    this.toastCtrl.create({
      message:"Welcome User!",
      showCloseButton:true,
      closeButtonText:"OK"
    }).present();
  }
  public signInRejected() {
    this.viewCtrl.dismiss();
    this.toastCtrl.create({
      message:"Sign In Unsuccessful, Please try again!",
      showCloseButton:true,
      closeButtonText:"OK"
    }).present();
  }

  // this.toastCtrl.create({
  //   message:"You have been Signed Up Successfully! Please LogIn now",
  //   showCloseButton:true,
  //   closeButtonText:"OK"
  // }).present();

  signInFormSubmit(form) {
    this.error1 = [];

    if (this.userInputDetails.emailID == null || this.userInputDetails.emailID == "") {
      this.error1.push("Email ID invalid");
    }

    if (this.userInputDetails.password == null || this.userInputDetails.password == "") {
      this.error1.push("password is Invalid");
    }

    console.log(this.error1.length);
    if (this.error1.length == 0) {
      this.getUserlist();
      let emailFlag = true;
      for (let i = 1; i <= this.userList.length; i++) {
        if (this.userList[i].EmailID != this.userInputDetails.emailID) {
          emailFlag = false;
        }
      }
      if (emailFlag) {

        this.authService.loginWithEmail(this.userInputDetails.emailID, this.userInputDetails.password)
          .then(() => {
            debugger;
            console.log("Login Successful");
            if(this.globalVars.authState.I){
              this.signInApproved();
            }
          }).catch(_error => {
            this.error1 = _error
            console.log('');
            this.signInRejected();
          });

      }
    }
    else {
      this.error1.push("Email ID doesn't match");
      console.error(this.error1);
      this.signInRejected();
    }
  }

  public getUserlist() {
    this.userList = this.firebaseService.getUser();
  }
}
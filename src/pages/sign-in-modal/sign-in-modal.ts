import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseService } from './../../providers/firebase-service/firebase-service';
import { AngularFireList } from 'angularfire2/database';
import { AuthService } from './../../providers/auth-service/auth-service';
/**
 * Generated class for the SignInModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in-modal',
  templateUrl: 'sign-in-modal.html',
})
export class SignInModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseService: FirebaseService, public authService: AuthService) {
  }
  userInputDetails = {
    EmailID: '',
    Password: ''
  };
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInModalPage');
  }

}

 signInFormSubmit(form) {
  this.error = [];

  if (this.userInputDetails.EmailID == null || this.userInputDetails.EmailID == "") {
    this.error.push("Email ID invalid");
  }

  if (this.userInputDetails.Password == null || this.userInputDetails.Password == "") {
    this.error.push("password is Invalid");
  }

  console.log(this.error.length);
  if (this.error.length == 0) {
    this.getUserlist();
    let emailFlag = false;
    for (let i = 1; i <= this.userList.length; i++) {
      if (this.userList[i].EmailID != this.userInputDetails.EmailID) {
        emailFlag = true;
      }
    }
    if (!emailFlag) {
      this.authService.signInWithEmailAndPassword(this.userInputDetails.EmailID, this.userInputDetails.Password)
        .then(() => {
          console.log('');
        }).catch(_error => {
          this.error = _error
          console.log('');
        });
    }
    console.log("Login Successful");
  }
  else {
    this.error.push("Email ID doesn't match");
    console.error(this.error);
  }

}





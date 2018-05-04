import { Component } from '@angular/core';
import { IonicPage, NavParams, ToastController, ViewController, ModalController } from 'ionic-angular';
import { FirebaseService } from './../../providers/firebase-service/firebase-service';
import { AngularFireList } from 'angularfire2/database';
import { AuthService } from './../../providers/auth-service/auth-service';
import { GlobalVarsProvider } from './../../providers/global-vars/global-vars';

@IonicPage()
@Component({
  selector: 'page-sign-up-modal',
  templateUrl: 'sign-up-modal.html',
})

export class SignUpModalPage {
  user: AngularFireList<any[]>;
  newUser = '';
  constructor(public modalCtrl: ModalController, public navParams: NavParams, 
    public firebaseService: FirebaseService, public authService: AuthService, 
    public toastCtrl: ToastController, public viewCtrl: ViewController,
    public globalVars: GlobalVarsProvider) { }

  public openInformationModal() {
    let modalPage3 = this.modalCtrl.create('InformationPage');
    modalPage3.present();
  }

  public signUpSuccessful() {
    this.viewCtrl.dismiss();
    this.toastCtrl.create({
      message: "You have been Signed Up Successfully! Please LogIn now",
      showCloseButton: true,
      closeButtonText: "OK"
    }).present();
  }

  public signUpFailed() {
    this.viewCtrl.dismiss();

    this.toastCtrl.create({
      message: "Sign Up failed! Please try again.",
      showCloseButton: true,
      closeButtonText: "OK"
    }).present();
  }

  public userList;
  userDetails = {
    FirstName: '',
    LastName: '',
    EmailID: '',
    Password: '',
    typeOfUser: ''
  };
  userDetails_Confirm = {
    ConfirmEmailID: '',
    ConfirmPassword: ''
  };
  error: string[];
  logForm(form) {
    console.log(form.value)
  }

  signUpFormSubmit(form) {
    this.error = [];
    this.userDetails.typeOfUser = this.globalVars.typeOfUser;
    if (this.userDetails.EmailID == null || this.userDetails.EmailID == "") {
      this.error.push("Email ID invalid");
    }
    if (this.userDetails.EmailID != this.userDetails_Confirm.ConfirmEmailID) {
      this.error.push("Email ID doesn't match");
    }
    if (this.userDetails.Password == null || this.userDetails.Password == "") {
      this.error.push("password is Invalid");
    }
    if (this.userDetails.Password != this.userDetails_Confirm.ConfirmPassword) {
      this.error.push("password doesn't match");
    }
    if (this.userDetails.FirstName == null || this.userDetails.FirstName == "") {
      this.error.push("First Name is invalid");
    }
    if (this.userDetails.LastName == null || this.userDetails.LastName == "") {
      this.error.push("Last Name is invalid");
    }

    console.log(this.error.length);
    if (this.error.length == 0) {
      this.getUserlist();
      let emailFlag = false;
      for (let i = 1; i <= this.userList.length; i++) {
        if (this.userList[i].EmailID == this.userDetails.EmailID) {
          emailFlag = true;
        }
      }
      if (!emailFlag) {
        this.authService.signUpWithEmail(this.userDetails.EmailID, this.userDetails.Password)
          .then(() => {
            debugger;
            console.log('');
            this.signUpSuccessful();

            if(this.globalVars.typeOfUser=="consultant"){
              this.openInformationModal();
            }
           
          }).catch(_error => {
            this.error = _error
            console.log('');
            this.signUpFailed();
          });
      }
      console.log("user Added");
    }
    else {
      this.error.push("Email ID already exists");
      console.error(this.error);
    }
  }

  public getUserlist() {
    this.userList = this.firebaseService.getUser();
  }
}
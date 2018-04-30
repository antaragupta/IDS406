import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import{ FirebaseService } from './../../providers/firebase-service/firebase-service';
import{ AngularFireList } from 'angularfire2/database';
//import { Router, ActivatedRoute } from '@angular/router';
/**
 * Generated class for the SignUpModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up-modal',
  templateUrl: 'sign-up-modal.html',
})
export class SignUpModalPage {
user: AngularFireList<any[]>;
newUser='';
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams,public firebaseService: FirebaseService) {

  }
  public openInformationModal() {
    let modalPage3 = this.modalCtrl.create('InformationPage');
    modalPage3.present();
  }

  userDetails = {
    FirstName: '',
    LastName: '',
    EmailID: '',
    ConfirmEmailID: '',
    Password: '',
    ConfirmPassword: ''
  };
  error: string[];
  logForm(form) {
    console.log(form.value)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpModalPage');
  }

  signUpFormSubmit(form) {
    this.error = [];

    if (!(this.userDetails.EmailID != null && this.userDetails.EmailID != " ")) {
      this.error.push("Email ID invalid");
    }
    if (!(this.userDetails.EmailID == this.userDetails.ConfirmEmailID)) {
      this.error.push("Email ID doesn't match");
    }
    if (!(this.userDetails.Password != null && this.userDetails.Password != " ")) {
      this.error.push("password is Invalid");
    }
    if (!(this.userDetails.Password == this.userDetails.ConfirmPassword)) {
      this.error.push("password doesn't match");
    }
    if (!(this.userDetails.FirstName != null && this.userDetails.FirstName != " ")) {
      this.error.push("First Name is invalid");
    }
    if (!(this.userDetails.LastName != null && this.userDetails.LastName != " ")) {
      this.error.push("Last Name is invalid");
    }

    if (this.error.length == 0) {
      this.addUser(this.userDetails);
    }
  }

  public addUser(user){
    this.firebaseService.addUser(user);
  }

}
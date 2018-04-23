import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  userDetails = {
    FirstName: '',
    LastName: '',
    EmailID: '',
    ConfirmEmailID: '',
    Password: '',
    ConfirmPassword: ''
  };
  ConsultantDetails = {
    FirstName: '',
    LastName: '',
    EmailID: '',
    ConfirmEmailID: '',
    Password: '',
    ConfirmPassword: ''
  };

  logForm(form) {
    console.log(form.value)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpModalPage');
  }

  signUpFormSubmit(form) {
    //if (this.userDetails.ConfirmEmailID == this.userDetails.EmailID && this.userDetails.Password == this.userDetails.ConfirmPassword) {
      //this.router.navigate(['home']);
    }

  }







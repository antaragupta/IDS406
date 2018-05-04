import { Component } from '@angular/core';
import { ModalController, AlertController, NavController } from 'ionic-angular';
import { Card } from '../card/card';
import { AuthService } from './../../providers/auth-service/auth-service';
import { GlobalVarsProvider } from './../../providers/global-vars/global-vars';

import { StripeJavaScriptPage } from './../stripe-java-script/stripe-java-script';
import { StripeNativePage } from '../stripe-native/stripe-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public alertCtrl: AlertController, public globalVars: GlobalVarsProvider, public authService: AuthService) {}

  error1: string[];
  carddetails() {
    this.navCtrl.push(Card);
  }

  openJavaScript(){
    this.navCtrl.push(StripeJavaScriptPage)
  }
 
  openNative(){
    this.navCtrl.push(StripeNativePage)
  }
  
  public openSignInModal() {
    let modalPage = this.modalCtrl.create('SignInModalPage');
    modalPage.present();
  }

  public openClientSignModal() {
    let modalPage1 = this.modalCtrl.create('SignUpModalPage');
    modalPage1.present();
  }

  public signout() {
    this.authService.signOut();
    this.globalVars.authStateReset();
    console.log("Signout");
  }

  public openConsultantSignModal() {
    let modalPage2 = this.modalCtrl.create('SignUpModalPage');
    modalPage2.present();
  }

  typeOfUser = "client";

  public showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Type of User',
      message: 'Are you a client or a consultant?',
      buttons: [
        {
          text: 'Client',
          handler: () => {
            this.openClientSignModal();
            console.log('I am a client');
            this.globalVars.typeOfUser = "client";
          }
        },
        {
          text: 'Consultant',
          handler: () => {
            this.openConsultantSignModal()
            console.log('I am a consultant');
            this.globalVars.typeOfUser = "consultant";
          }
        }
      ]
    });
    confirm.present();
  }

  slides = [
    {
      title: "Welcome to SALESTIVITY!",
      description: " <b>One</b> single platform for Clients and Consultants.",
      image: "assets/imgs/slide1.png",
    },
    {
      title: "Billing Options",
      description: "<b>Start your free trial today!</b> <p>Choose the right plan for you and your company.</p>",
      image: "assets/imgs/icon-credit-card.png",
    },
    {
      title: "Search for the PERFECT person to take your business to the next level.",
      description: " <b>SalesTivity</b> is a commom platform for managing and scaling Business at any level.",
      image: "assets/imgs/slide3.png",
    }
  ];
}
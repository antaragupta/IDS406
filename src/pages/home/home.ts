import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Card } from '../card/card';
import { FirebaseService } from './../../providers/firebase-service/firebase-service';
import { AngularFireList } from 'angularfire2/database';
import { AuthService } from './../../providers/auth-service/auth-service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  status: boolean = false;
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  error1: string[];
  carddetails() {
    this.navCtrl.push(Card);
  }

  public openSignInModal(){
    let modalPage = this.modalCtrl.create('SignInModalPage');
    this.status = true;
    modalPage.present();
  }
  public openClientSignModal(){
    let modalPage1 = this.modalCtrl.create('SignUpModalPage');
    modalPage1.present();
  }
  public signout(){
   
   
    console.log("Signout");
    this.status = false;
  }

  public openConsultantSignModal(){
    let modalPage2 = this.modalCtrl.create('SignUpModalPage');
    modalPage2.present();
  }
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
          }
        },
        {
          text: 'Consultant',
          handler: () => {
            this.openConsultantSignModal()
            console.log('I am a consultant');
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



 

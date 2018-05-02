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
      title: "Welcome to SellsTivity!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];
}



 

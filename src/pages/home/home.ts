import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  public openSignInModal(){
    let modalPage = this.modalCtrl.create('SignInModalPage');
    modalPage.present();
  }
  public openClientSignModal(){
    let modalPage1 = this.modalCtrl.create('SignUpModalPage');
    modalPage1.present();
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
}

export class BasicPage {
  slides = [
    {
      title: "Welcome to the Docs!",
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
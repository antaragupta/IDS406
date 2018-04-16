import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController) {

  }

  public openModal(){
    let modalPage = this.modalCtrl.create('SignInModalPage');
    modalPage.present();
  }
}
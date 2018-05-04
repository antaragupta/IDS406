import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AccountsPage } from './../../pages/accounts/accounts';
import { Router } from '@angular/router';
/**
 * Generated class for the InformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {
accountsPage=AccountsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public router: Router) {

  }

  consultant = "Basic Information";
  /**
   * goToDomainExpert()
   */
  public goToDomainExpert() {
    this.consultant = "Domain Expert";
  }
  public goToBasicInformation() {
    this.consultant = "Basic Information";
  }
  public goToProfile() {
    this.consultant = "Profile";
  }
public proceed(){
  this.navCtrl.push(this.accountsPage);
  //this.router.navigate(["accounts"]);
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationPage');
  }

}

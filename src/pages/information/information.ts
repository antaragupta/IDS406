import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController,ToastController} from 'ionic-angular';
import { AccountsPage } from './../../pages/accounts/accounts';
import { Router } from '@angular/router';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';

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
  imageURI:any;
 imageFileName:any;

accountsPage=AccountsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public router: Router, private transfer: FileTransfer,private camera: Camera,public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {

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
getImage() {
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
  }

  this.camera.getPicture(options).then((imageData) => {
    this.imageURI = imageData;
  }, (err) => {
    console.log(err);
    this.presentToast(err);
  });
}

uploadFile() {
  let loader = this.loadingCtrl.create({
   
  });
  loader.present();
  const fileTransfer: FileTransferObject = this.transfer.create();

  let options: FileUploadOptions = {
    fileKey: 'ionicfile',
    fileName: 'ionicfile',
    chunkedMode: false,
    mimeType: "image/jpeg",
    headers: {}
  }

  fileTransfer.upload(this.imageURI, 'http://192.168.0.7:8080/api/uploadImage', options)
    .then((data) => {
    console.log(data+" Uploaded Successfully");
    this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
    loader.dismiss();
    this.presentToast("Image uploaded successfully");
  }, (err) => {
    console.log(err);
    loader.dismiss();
    this.presentToast(err);
  });
}

presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 3000,
    position: 'bottom'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationPage');
  }

}

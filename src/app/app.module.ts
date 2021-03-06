import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseService } from '../providers/firebase-service/firebase-service';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

import { Stripe } from '@ionic-native/stripe';
import { AuthService } from '../providers/auth-service/auth-service';
import { AngularFireAuth } from 'angularfire2/auth';
import { GlobalVarsProvider } from '../providers/global-vars/global-vars';
import { AccountsPage } from '../pages/accounts/accounts';
import { RouterModule, Routes, Router } from '@angular/router';

import { StripeJavaScriptPage } from '../pages/stripe-java-script/stripe-java-script';
import { StripeNativePage } from '../pages/stripe-native/stripe-native';


import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';


const firebaseConfig = {
  apiKey: "AIzaSyAefODCeCo740GYKnhuxQsuiCGTG3OAIuY",
  authDomain: "myapp-20845.firebaseapp.com",
  databaseURL: "https://myapp-20845.firebaseio.com",
  projectId: "myapp-20845",
  storageBucket: "myapp-20845.appspot.com",
  messagingSenderId: "828357346297"
};

const appRoutes: Routes = [
  { path: 'accounts', component: AccountsPage }
];

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AccountsPage,
    StripeJavaScriptPage,
    StripeNativePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp),
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    StripeJavaScriptPage,
    StripeNativePage
  ],
  providers: [
    StatusBar,
    AuthService,
    SplashScreen,
    Stripe,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FirebaseService,
    AngularFireAuth,
    GlobalVarsProvider,
    FileTransfer,
  FileTransferObject,
  File,
  Camera
  ]
})
export class AppModule { }
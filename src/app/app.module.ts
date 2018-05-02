import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

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

const firebaseConfig = {
  apiKey: "AIzaSyAefODCeCo740GYKnhuxQsuiCGTG3OAIuY",
  authDomain: "myapp-20845.firebaseapp.com",
  databaseURL: "https://myapp-20845.firebaseio.com",
  projectId: "myapp-20845",
  storageBucket: "myapp-20845.appspot.com",
  messagingSenderId: "828357346297"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    AuthService,
    SplashScreen,
    Stripe,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FirebaseService,
    AngularFireAuth
  ]
})
export class AppModule { }
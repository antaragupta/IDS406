import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class FirebaseService {

  constructor(public afd: AngularFireDatabase) { }

  public getUser() {
    return this.afd.list('/Users/');
  }

  public addUser(user) {
    this.afd.list('/Users/').push(user);
  }
}
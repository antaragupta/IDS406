import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVarsProvider {

  constructor() {
  }

  typeOfUser = "";
  userDetails: any = null;
  error: any = null;
  authState = { I: false };

  public authStateReset() {
    this.typeOfUser = "";
    this.userDetails = null;
    this.error = null;
    this.authState = { I: false };
  }
}
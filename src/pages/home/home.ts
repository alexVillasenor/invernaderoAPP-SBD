import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  invernaderos = [];

  constructor(public navCtrl: NavController, public navParms: NavParams)
  {
    console.log(this.navParms);
  }

}

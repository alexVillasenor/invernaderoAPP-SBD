import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  invernaderos = [];

  constructor(public navCtrl: NavController, public navParms: NavParams, public http: Http)
  {
    console.log(this.navParms.get('usuario'));

    this.getInvernaderos();
  }

  getInvernaderos(){
    this.http.get('/invernadero/?usuario=' +
      this.navParms.get('usuario'))
      .subscribe(data => {
        this.invernaderos=data.json();
        console.log(data.text());
      }, error1 => {
        console.log('error');
      });
  }


}

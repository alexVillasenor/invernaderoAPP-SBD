import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {PlantaPage} from "../planta/planta";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  plantaPage = PlantaPage;
  invernaderos = [];

  constructor(public navCtrl: NavController, public navParms: NavParams, public http: Http)
  {
    console.log(this.navParms.get('usuario'));

    this.getInvernaderos();
  }

  clickPlanta(i){
    this.navCtrl.push(this.plantaPage, i);
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

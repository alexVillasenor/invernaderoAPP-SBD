import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";

/**
 * Generated class for the PlantaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-planta',
  templateUrl: 'planta.html',
})
export class PlantaPage {
  plantas = [
    {
      "cultivo": "Platano",
      "fecha2": "Sat, 01 Feb 1997 00:00:00 GMT",
      "id": 1,
      "id_clasi": 1,
      "id_inv": 1
    },
    {
      "cultivo": "Manzano",
      "fecha2": "Sat, 16 Aug 1997 00:00:00 GMT",
      "id": 2,
      "id_clasi": 2,
      "id_inv": 1
    }
  ];
  nombre = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    let id = this.navParams.get('id');
    console.log(id);
    this.nombre = this.navParams.get('nombre');
    this.getPlantas(id);
  }

  getPlantas(id){
    this.http.get('/planta/?id=' + id.toString())
      .subscribe(data => {
        this.plantas=data.json();
        console.log(data.text());
      }, error1 => {
        console.log('error');
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlantaPage');
  }

}

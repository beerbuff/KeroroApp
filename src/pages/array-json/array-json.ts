import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ArrayJsonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-array-json',
  templateUrl: 'array-json.html',
})
export class ArrayJsonPage {
  gameArray = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.loadGameData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArrayJsonPage');
  }

  loadGameData() {
    let url = 'http://localhost/shop/getAllGames_7.php';

    this.http.get(url).subscribe(
      (data: any) => {
        console.log(data);
        this.gameArray = data.games;
      }
      , (error) => {
        console.log(error);
      }

    );
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {

contactArray = [{name: 'Yok', telephone: '0980469609', imageUrl: 'assets/imgs/iu.jpg'},
                {name: 'MAM', telephone: '0955106748', imageUrl: 'assets/imgs/sehun.jpg'},
                {name: 'YOK', telephone: '0980469609', imageUrl: 'assets/imgs/lay.jpg'},
                {name: 'YOK', telephone: '0980469609', imageUrl: 'assets/imgs/baekhyun.jpg'},
                ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }
  viewDetail(item){
    this.navCtrl.push("PhoneBookDetailPage", item);
  }

}//end class

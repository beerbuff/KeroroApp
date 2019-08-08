import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SMS } from '@ionic-native/sms/ngx';

/**
 * Generated class for the PhoneBookDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book-detail',
  templateUrl: 'phone-book-detail.html',
})
export class PhoneBookDetailPage {

  contact = { name: '', telephone: '', imageUrl: '' };

  constructor(public navCtrl: NavController, public navParams: NavParams, private mysms: SMS) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookDetailPage');
    this.contact = this.navParams.data;
    console.log(this.contact);
  }

  call() {
    alert("call");
    window.open('tel: ' + this.contact.telephone);
  }

  sms() {
    // alert("sms");
    this.mysms.send('416123456', 'Hello world!');
  }

}//end class

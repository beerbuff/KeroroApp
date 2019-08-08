import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
* Generated class for the LoginPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
selector: 'page-login',
templateUrl: 'login.html',
})
export class LoginPage {
 loginResult: string;

constructor(public navCtrl: NavController, public navParams: NavParams) {
}

ionViewDidLoad() {
  console.log('ionViewDidLoad LoginPage');
}



signIn(_username, _password) {
  alert('hello ' + _username + _password);
  if (_password == '1234') {
    this.loginResult = "Pass";
    this.navCtrl.push("PhoneBookPage");
  } else {
    this.loginResult = "Faild";

  }
}
}//end


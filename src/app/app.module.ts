import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { SMS } from '@ionic-native/sms/ngx';
import { BarcodeScannerPage } from '../pages/barcode-scanner/barcode-scanner'; //pages
import { BarcodeScanner } from '@ionic-native/barcode-scanner'; //native
import { SimpleJsonPage } from '../pages/simple-json/simple-json';
import { JsonMenuPage } from '../pages/json-menu/json-menu';
import { PostJsonPage } from '../pages/post-json/post-json';
import { ArrayJsonPage } from '../pages/array-json/array-json';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage, LoginPage, BarcodeScannerPage, SimpleJsonPage, JsonMenuPage, PostJsonPage,ArrayJsonPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage, LoginPage, BarcodeScannerPage, SimpleJsonPage, JsonMenuPage, PostJsonPage,ArrayJsonPage
  ],
  providers: [
    StatusBar,
    SplashScreen, SMS, BarcodeScanner,//native
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }

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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage, LoginPage, BarcodeScannerPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage, LoginPage, BarcodeScannerPage
  ],
  providers: [
    StatusBar,
    SplashScreen, SMS, BarcodeScanner,//native
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }

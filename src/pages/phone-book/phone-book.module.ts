import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhoneBookPage } from './phone-book';

@NgModule({
  declarations: [
    PhoneBookPage,
  ],
  imports: [
    IonicPageModule.forChild(PhoneBookPage),
  ],
})
export class PhoneBookPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JsonMenuPage } from './json-menu';

@NgModule({
  declarations: [
    JsonMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(JsonMenuPage),
  ],
})
export class JsonMenuPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SimpleJsonPage } from './simple-json';


@NgModule({
  declarations: [
    SimpleJsonPage,
  ],
  imports: [
    IonicPageModule.forChild(SimpleJsonPage),
  ],
})
export class SimpleJsonPageModule {}

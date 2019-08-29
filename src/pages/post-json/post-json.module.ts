import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostJsonPage } from './post-json';

@NgModule({
  declarations: [
    PostJsonPage,
  ],
  imports: [
    IonicPageModule.forChild(PostJsonPage),
  ],
})
export class PostJsonPageModule {}

import { Showflight } from './showflight';

import { NgModule, ErrorHandler } from '@angular/core';
import { IonicPageModule, IonicErrorHandler } from 'ionic-angular';


@NgModule({
  declarations: [
    Showflight,
  ], providers: [{ provide: ErrorHandler, 
                useClass: IonicErrorHandler }],

  imports: [
    IonicPageModule.forChild(Showflight),
  ],
})
export class SearchPageModule {}

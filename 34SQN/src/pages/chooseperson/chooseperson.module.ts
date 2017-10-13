import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Chooseperson } from './chooseperson';

@NgModule({
  declarations: [
    Chooseperson,
  ],
  imports: [
    IonicPageModule.forChild(Chooseperson),
  ],
  exports: [
    Chooseperson,
  ]
})
export class ChoosepersonPageModule {}

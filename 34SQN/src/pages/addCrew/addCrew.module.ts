import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCrew } from './addCrew';

@NgModule({
  declarations: [
    AddCrew,
  ],
  imports: [
    IonicPageModule.forChild(AddCrew),
  ],
  exports: [
    AddCrew
  ]
})
export class AddCrewModule {}

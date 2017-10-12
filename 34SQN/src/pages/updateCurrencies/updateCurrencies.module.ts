import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdateCurrencies } from './updateCurrencies';

@NgModule({
  declarations: [
    UpdateCurrencies,
  ],
  imports: [
    IonicPageModule.forChild(UpdateCurrencies),
  ],
})
export class UpdateCurrenciesPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdateCurrenciesPage } from './updateCurrencies';

@NgModule({
  declarations: [
    UpdateCurrenciesPage,
  ],
  imports: [
    IonicPageModule.forChild(UpdateCurrenciesPage),
  ],
})
export class UpdateCurrenciesPageModule {}

import { NgModule, ErrorHandler } from '@angular/core';
import { IonicPageModule, IonicErrorHandler } from 'ionic-angular';
import { SearchPage } from './search';

@NgModule({
  declarations: [
    SearchPage,
  ], providers: [{ provide: ErrorHandler, 
                useClass: IonicErrorHandler }],

  imports: [
    IonicPageModule.forChild(SearchPage),
  ],
})
export class SearchPageModule {}

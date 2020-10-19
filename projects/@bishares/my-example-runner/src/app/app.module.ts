import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MyExampleLibModule } from '@bishares/my-example-lib';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyExampleLibModule,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }

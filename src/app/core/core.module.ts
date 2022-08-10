import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Http404Component } from './http404/http404.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    Http404Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }

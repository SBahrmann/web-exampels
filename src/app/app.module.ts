import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AccentColorComponent } from './css/accent-color/accent-color.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AccentColorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

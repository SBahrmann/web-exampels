import { AccentColorComponent } from './css/accent-color/accent-color.component';
import { AllUnsetComponent } from './css/all-unset/all-unset.component';
import { AnchorComponent } from './css/anchor/anchor.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AspectRatioComponent } from './css/aspect-ratio/aspect-ratio.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiWebAnimationComponent } from './js/api-web-animation/api-web-animation.component';

@NgModule({
  declarations: [
    AccentColorComponent,
    AnchorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

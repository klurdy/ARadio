import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { ScanComponent } from './scan/scan.component';
import { RecommendationsComponent } from './scan/recommendations/recommendations.component';
import { AugmentComponent } from './scan/augment/augment.component';

@NgModule({
  declarations: [
    AppComponent,
    HowItWorksComponent,
    ScanComponent,
    RecommendationsComponent,
    AugmentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

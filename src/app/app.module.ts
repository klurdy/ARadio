import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { ScanComponent } from './scan/scan.component';
import { RecommendationsComponent } from './scan/recommendations/recommendations.component';
import { AugmentComponent } from './scan/augment/augment.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HowItWorksComponent,
    ScanComponent,
    RecommendationsComponent,
    AugmentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

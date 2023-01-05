import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FastFoodComponent } from './fast-food/fast-food.component';
import { HeaderComponent } from './header/header.component';
import { MexicanComponent } from './mexican/mexican.component';
import { DessertsComponent } from './desserts/desserts.component';
import { LuxuryDinnerComponent } from './luxury-dinner/luxury-dinner.component';
import { TakeOutComponent } from './take-out/take-out.component';
import { RandomComponent } from './random/random.component';



@NgModule({
  declarations: [
    AppComponent,
    FastFoodComponent,
    HeaderComponent,
    MexicanComponent,
    DessertsComponent,
    LuxuryDinnerComponent,
    TakeOutComponent,
    RandomComponent
  ],
  imports: [
    BrowserModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

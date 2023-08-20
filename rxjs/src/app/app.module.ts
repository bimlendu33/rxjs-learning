import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromiseComponent } from './promise/promise.component';
import { HttpClientModule } from  '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { ObservableComponent } from './observable/observable.component';
import { TimerComponent } from './timer/timer.component';
import { IntervalComponent } from './interval/interval.component';
import { OfComponent } from './of/of.component';
import { FromComponent } from './from/from.component';

@NgModule({
  declarations: [
    AppComponent,
    PromiseComponent,
    LandingComponent,
    ObservableComponent,
    TimerComponent,
    IntervalComponent,
    OfComponent,
    FromComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

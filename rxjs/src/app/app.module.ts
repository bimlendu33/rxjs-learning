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
import { FromEventComponent } from './from-event/from-event.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { MapComponent } from './map/map.component';
import { TapComponent } from './tap/tap.component';
import { PluckComponent } from './pluck/pluck.component';
import { TestComponent } from './test/test.component';
import { FilterComponent } from './filter/filter.component';
import { TakeComponent } from './take/take.component';

@NgModule({
  declarations: [
    AppComponent,
    PromiseComponent,
    LandingComponent,
    ObservableComponent,
    TimerComponent,
    IntervalComponent,
    OfComponent,
    FromComponent,
    FromEventComponent,
    ToArrayComponent,
    MapComponent,
    TapComponent,
    PluckComponent,
    TestComponent,
    FilterComponent,
    TakeComponent
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

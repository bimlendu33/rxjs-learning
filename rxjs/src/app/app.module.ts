import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromiseComponent } from './components/promise/promise.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './components/landing/landing.component';
import { ObservableComponent } from './components/observable/observable.component';
import { TimerComponent } from './components/timer/timer.component';
import { IntervalComponent } from './components/interval/interval.component';
import { OfComponent } from './components/of/of.component';
import { FromComponent } from './components/from/from.component';
import { FromEventComponent } from './components/from-event/from-event.component';
import { ToArrayComponent } from './components/to-array/to-array.component';
import { MapComponent } from './components/map/map.component';
import { TapComponent } from './components/tap/tap.component';
import { PluckComponent } from './components/pluck/pluck.component';
import { TestComponent } from './components/test/test.component';
import { FilterComponent } from './components/filter/filter.component';
import { TakeComponent } from './components/take/take.component';
import { RetryComponent } from './components/retry/retry.component';
import { SubjectComponent } from './components/subject/subject.component';
import { BehaviorSubjectComponent } from './components/behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './components/replay-subject/replay-subject.component';
import { SubjectService } from './services/subject.service';
import { BehaviorSubjectService } from './services/behavior-subject.service';
import { ReplaySubjectService } from './services/replay-subject.service';
import { SideOffCanvasComponent } from './components/side-off-canvas/side-off-canvas.component';

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
    TakeComponent,
    RetryComponent,
    SubjectComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComponent,
    SideOffCanvasComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [SubjectService, BehaviorSubjectService, ReplaySubjectService],
  bootstrap: [AppComponent],
})
export class AppModule {}

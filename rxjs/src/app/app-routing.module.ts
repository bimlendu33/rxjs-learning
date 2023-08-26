import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './components/promise/promise.component';
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

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'promise', component: PromiseComponent },
  { path: 'observable', component: ObservableComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'interval', component: IntervalComponent },
  { path: 'of', component: OfComponent },
  { path: 'from', component: FromComponent },
  { path: 'from-event', component: FromEventComponent },
  { path: 'to-array', component: ToArrayComponent },
  { path: 'map', component: MapComponent },
  { path: 'tap', component: TapComponent },
  { path: 'pluck', component: PluckComponent },
  { path: 'test', component: TestComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'take', component: TakeComponent },
  { path: 'retry', component: RetryComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

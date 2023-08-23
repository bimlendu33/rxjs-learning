import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
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
  { path: '**', pathMatch: 'full', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

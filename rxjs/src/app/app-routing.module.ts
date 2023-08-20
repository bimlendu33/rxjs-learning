import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { LandingComponent } from './landing/landing.component';
import { ObservableComponent } from './observable/observable.component';
import { TimerComponent } from './timer/timer.component';
import { IntervalComponent } from './interval/interval.component';
import { OfComponent } from './of/of.component';
import { FromComponent } from './from/from.component';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'promise', component: PromiseComponent },
  { path: 'observable', component: ObservableComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'interval', component: IntervalComponent },
  { path: 'of', component: OfComponent },
  { path: 'from', component: FromComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

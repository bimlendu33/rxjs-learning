import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, tap, timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css'],
})
export class IntervalComponent implements OnInit, OnDestroy {
  intervalSubs!: Subscription;
  constructor() {
    console.log('-----------------------------Interval Operator-----------------------------');
  }

  ngOnInit(): void {
    // interval operator is similar to setTimeout, only difference is it emits data from 0 to infinite in every N seconds
    // N seconds is passed as paramter to interval operator and data will be emitted in every N seconds
    // with tap we collect emitted data by interval and perform additional operations like here we unsubsribed from interval subscription
    // if we did not want to unsubscribe then we had simply subscribed to collect data
    this.intervalSubs = interval(1000)
      .pipe(
        tap((item) => {
          if (item == 5) {
            this.intervalSubs?.unsubscribe();
          }
        })
      )
      .subscribe((res) => {
        console.log('emitting stream ', res);
      });
  }

  ngOnDestroy(): void {
    this.intervalSubs?.unsubscribe();
  }
}

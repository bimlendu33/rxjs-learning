import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, tap, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit, OnDestroy {
  timerSubs!: Subscription;
  constructor() {}

  ngOnInit(): void {
    // timer operator is similar to setInterval, which emits data from 0 to infinite in every N2 seconds, after N1 milliseconds
    // N2 seconds is passed as paramter to timer operator and data will be emiited after every N1 seconds
    // N1 millisecond devices after how much milliseconds will the execution be started
    // with tap we collect emiited data by timer and perform additional operations like here we unsubsribed from timer subscription
    this.timerSubs = timer(3000, 1000)
      .pipe(
        tap((item) => {
          if (item == 5) {
            this.timerSubs?.unsubscribe();
          }
        })
      )
      .subscribe((res) => {
        console.log('emitting stream ', res);
      });
  }

  ngOnDestroy(): void {
    this.timerSubs?.unsubscribe();
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, of, tap } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css'],
})
export class TapComponent implements OnInit, OnDestroy {
  intervalSubs!: Subscription;
  subsOne!: Subscription;
  constructor(private http: HttpClient) {
    console.log('------------------------Tap Operator----------------------------');
  }

  ngOnInit(): void {
    // tap operator is used for adding additional operations on observables apart from normal operations
    // example unsubsribing an observable on some condition
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

    // example 02 -> we can use tap for adding logger service too -> as an additional operation
    // or we can add any additional monitoring script too into this tap function
    this.subsOne = this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(
        tap(() => {
          // add your logger sevice here
        })
      )
      .subscribe((res) => {
        console.log();
      });
  }

  ngOnDestroy(): void {
    this.intervalSubs?.unsubscribe();
    this.subsOne?.unsubscribe();
  }
}

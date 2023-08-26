import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, interval, retry, tap } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css'],
})
export class RetryComponent implements OnInit {
  subs!: Subscription;
  constructor() {
    console.log('-----------------------Retry Operator-----------------------------');
  }

  ngOnInit(): void {
    let observable = new Observable((observer: any) => {
      console.log('called observer item');
      //observer.error({ name: 'Angular', type: 'JavaScript' });
      observer.next({ name: 'Angular', type: 'JavaScript' });
    });

    observable.pipe(retry(5)).subscribe({
      next: (response) => {
        console.log('response ', response);
      },
      error: (error) => {
        console.log('error ', error);
      },
      complete: () => {},
    });
  }
}

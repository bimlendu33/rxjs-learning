import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.css'],
})
export class OfComponent implements OnInit, OnDestroy {
  promiseSubs!: Subscription;
  ofOneSubs!: Subscription;
  ofTwoSubs!: Subscription;

  constructor() {}

  ngOnInit(): void {
    console.log(
      '-----------------------------OF operator---------------------------------'
    );

    // 'of' operator convers 1 or more non-iterable parameter to Observables.
    // 'of' operator either accepts N number of paramters, or  single object. It should never be iterable
    // converts parameter or Object to Observable
    this.ofOneSubs = of('param1', 'param2', 'param3').subscribe((res) => {
      console.log('res ', res);
    });

    // since 'of' does not accept iterable, it will return same iterable & the console will print equal to the the number of elements in iterables
    // below ex will print the same object twice considering each element.
    // so we should never use OF-operator against iterables
    this.ofTwoSubs = of(['JavaScript', 'NOde']).subscribe((res) => {
      console.log('res ', res);
    });

    // 'Of' is also used to convert a Promise to Observable
    // but it returns Observable-promise not normal observable
    let promise = new Promise((resolve, reject) => {
      resolve('sending data');
    });

    let ObservableFromPromise = of(promise);
    this.promiseSubs = ObservableFromPromise.subscribe((res) => {
      console.log('promise observable ', res);

      // since 'of' operator returns promise-observable i..e, we had to .then() after .subscribe()
      // if we want to get rid of this then use 'from' operator to convert promise to observable
      res.then((data) => console.log('data', data));
    });
  }

  ngOnDestroy(): void {
    this.promiseSubs?.unsubscribe();
    this.ofOneSubs?.unsubscribe();
    this.ofTwoSubs?.unsubscribe();
  }
}

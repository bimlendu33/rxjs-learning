import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css'],
})
export class FromComponent implements OnInit, OnDestroy {
  fromOneSubs!: Subscription;
  fromTwoSubs!: Subscription;
  fromThreeSubs!: Subscription;

  constructor() {}

  ngOnInit(): void {
    console.log(
      '----------------------------FROM OPERATOR-----------------------------'
    );
    // 'from' operator is used to create observable from iterables
    let fromOneObservable = from(['Angular', 'React', 'JavaScript']);

    // here console will print one value at a time
    // where as if we had used of operator -> then same array had been printed for number of elements times. so this is 'of' vs 'from' difference
    this.fromOneSubs = fromOneObservable.subscribe((res) => {
      console.log('res ', res);
    });

    // 'from' operator to convert promise to observable
    let promiseOb = new Promise((resolve, reject) => {
      resolve('resolving response data');
    });

    let observableFromPromise = from(promiseOb);
    // 'of' operator returns promise-observable
    // whereas 'from' opeartor returns only observable and hence we dont need to do .then() again
    // we directly get response data on subscribe
    this.fromTwoSubs = observableFromPromise.subscribe((response) => {
      console.log('response of observable from promise ', response);
    });

    // from operator with string
    let stringObservable = from('Hello RxJS');

    // when we see console it prints each character of string at a time
    // so 'from' operator treats string as iterable and consoles each character at a time
    this.fromThreeSubs = stringObservable.subscribe((res) => {
      console.log('string observable using from ', res);
    });
  }

  ngOnDestroy(): void {
    this.fromOneSubs?.unsubscribe();
    this.fromTwoSubs?.unsubscribe();
    this.fromThreeSubs?.unsubscribe();
  }
}

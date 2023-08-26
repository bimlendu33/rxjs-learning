import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css'],
})
export class PromiseComponent implements OnInit, OnDestroy {
  useSubs!: Subscription;

  constructor(private http: HttpClient) {
    console.log('-----------------------PROMISE Operator-----------------------------');
  }

  ngOnInit(): void {
    // fetch returns promise response and we convert it to json first in first then and then collect response
    // using another response with then in json format
    // below is auto promise example as fetch return promise by default
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(function (res) {
        return res.json(); // call the json method on the response to get JSON
      })
      .then(function (response) {
        console.log(response);
      });

    this.createPromise();
  }

  // manually creating promise
  createPromise(): void {
    const promiseObj = new Promise((resolve, reject) => {
      resolve('create data to be emiited via promise');
    });

    // subscribe promise to get response data using then
    promiseObj.then((response) => {
      console.log('response from promise', response);
    });
  }

  ngOnDestroy(): void {
    this.useSubs?.unsubscribe();
  }
}

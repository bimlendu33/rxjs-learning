import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('----------------------Observables-------------------------');

    // this response is returned as observable as http clients returns the response in observable type
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((response) => {
        console.log('response ', response);
      });
  }

  createCustomObservable() {
    // new() creates observable, with observer as parameter, we can do three things
    // 1. emit data with next('data)
    // 2. emit error with error('data')
    // 3. complete() -> finishes Observable execution, no more data emission from here
    const observableOb = new Observable((observer) => {
      observer.next('1');
      observer.next('2');
      observer.next('3');

      // error is commented because on error observable next steps is stoppped
      // that is if below error code is not commented then after error .complete() will not get executed
      // observer.error('error data');
      observer.complete();
    });

    // this will have 3 params, next -> collects emitted data; (error) -> collects error emitted; ()=> calls when obserable completes fully
    observableOb.subscribe({
      next: (resp) => console.log(resp),
      error: (error) => console.log(error),
      complete() {
        // do what you want to do on full completion of observale execution here
      },
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { of, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css'],
})
export class ToArrayComponent implements OnInit {
  constructor(private http: HttpClient) {
    console.log('--------------------------toArray Operator------------------------');
  }

  ngOnInit(): void {
    // takes an observable as parameter and converts into another array
    // here we passed object -> converted to observable with of operator -> then added toArray() -> to get array as output
    of({ subject: 'RxJS', type: 'Learning' })
      .pipe(toArray())
      .subscribe((res) => {
        console.log('res ', res);
      });

    // example two
    // made an http call which returns object observable as response
    // used toArray to convert that object observable -> object array
    this.http
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .pipe(toArray())
      .subscribe((res) => {
        console.log('http response ', res);
      });
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, filter, from, map } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit, OnDestroy {
  subsOne!: Subscription;
  subsTwo!: Subscription;

  constructor(private http: HttpClient) {
    console.log('----------------------------Filter Operator-----------------------------');
  }

  ngOnInit(): void {
    // filter is used to filterout data out of observable data on some condition
    // filter from custom data
    this.subsOne = from([1, 2, 3, 4, 5, 6, 7, 8])
      .pipe(filter((item) => item > 4))
      .subscribe((res) => {
        console.log('res ', res);
      });

    // filter on http calls
    this.subsTwo = this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res: any) => {
      from(res)
        .pipe(
          filter((item: any) => {
            return item.id > 2;
          })
        )
        .subscribe((res) => {
          console.log('hello reponse ', res);
        });
    });
  }

  ngOnDestroy(): void {
    this.subsOne?.unsubscribe();
    this.subsTwo?.unsubscribe();
  }
}

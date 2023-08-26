import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, from, map } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit, OnDestroy {
  subsOne!: Subscription;
  subsTwo!: Subscription;

  constructor(private http: HttpClient) {
    console.log('------------------------MAP Operator----------------------------');
  }

  ngOnInit(): void {
    // map takes an observable as paramter at a time, does modification of that paramter and returns them to subscriber
    this.subsOne = from([
      { name: 'Apple', type: 'fruit' },
      { name: 'Guava', type: 'fruit' },
      { name: 'Orange', type: 'fruit' },
    ])
      .pipe(
        map((item) => {
          item.type = 'tree ' + item?.type;
          return item;
        })
      )
      .subscribe((res) => {
        console.log('res ', res);
      });

    // map in http calls -> took response object -> and with map we just returned title field of object just after http call
    this.subsTwo = this.http
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .pipe(
        map((item: any) => {
          return item.title;
        })
      )
      .subscribe((res) => {
        console.log('http response ', res);
      });
  }

  ngOnDestroy(): void {
    this.subsOne?.unsubscribe();
    this.subsTwo?.unsubscribe();
  }
}

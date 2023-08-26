import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, concatMap, from, map, mergeMap, of, pluck, switchMap, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css'],
})
export class PluckComponent implements OnInit, OnDestroy {
  subsOne!: Subscription;
  subsTwo!: Subscription;
  subsThree!: Subscription;
  subsFour!: Subscription;
  subsFive!: Subscription;

  constructor(private http: HttpClient) {
    console.log('-------------------------pluck operator---------------------------');
  }

  ngOnInit(): void {
    // pluck operator is used to separate value by keyname from an object or iterable like array
    // when plain object is there
    this.subsOne = of({ name: 'Angular', type: 'TypeScript' })
      .pipe(pluck('name'))
      .subscribe((res) => {
        console.log('plucked from plain object ', res);
      });

    // when nested object is there
    this.subsTwo = of({ name: 'Angular', type: { name: 'React' } })
      .pipe(pluck('type', 'name'))
      .subscribe((res) => {
        console.log('plucked from nested object ', res);
      });

    // pluck against Arrays
    this.subsThree = from([{ name: 'Angular', type: { name: 'React' } }])
      .pipe(pluck('name'))
      .subscribe((res) => {
        console.log('pucked from array1 ', res);
      });

    // pluck against nested Arrays
    this.subsFour = from([{ name: 'Angular', type: { name: 'React' } }])
      // simply pass keys to the nested key from top to last for which we want to get vales
      .pipe(pluck('type', 'name'))
      .subscribe((res) => {
        console.log('pucked from array2 ', res);
      });

    // against http calls
    this.subsFive = this.http
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .pipe(pluck('title'))
      .subscribe((res) => {
        console.log('http pluck1 ', res);
      });

    /*  this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(
        mergeMap((response: any) => {
          console.log('type of response ', JSON.stringify(response));
          return of(response);
        }),
        pluck('email')
      )
      .subscribe((res) => {
        console.log('http pluck2 ', res);
      }); */
  }

  ngOnDestroy(): void {
    this.subsOne?.unsubscribe();
    this.subsTwo?.unsubscribe();
    this.subsThree?.unsubscribe();
    this.subsFour?.unsubscribe();
    this.subsFive?.unsubscribe();
  }
}

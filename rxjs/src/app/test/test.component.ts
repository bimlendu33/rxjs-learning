import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from, map, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    from([1, 2, 3, 4])
      .pipe(
        map((item) => {
          console.log('type1 of ', typeof item);
          return item;
        })
      )
      .subscribe((res) => {
        console.log('res1 ', res);
      });

    let data = this.http.get<any>('https://jsonplaceholder.typicode.com/users').pipe(
      mergeMap((item: any) => {
        return item;
      }),
      map((item: any) => {
        item.baklol = true;
        return item;
      })
    );

    data.subscribe((res) => {
      console.log('res http ', res);
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription, from, take, takeLast } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css'],
})
export class TakeComponent implements OnInit {
  subsOne!: Subscription;
  subsTwo!: Subscription;
  subsThree!: Subscription;
  SubsFour!: Subscription;

  constructor(private http: HttpClient) {
    console.log('-----------------------Take Operator-----------------------------');
  }

  ngOnInit(): void {
    // take operator accepts N number as parameter and emites only those N data as observable streams
    this.subsOne = from([1, 2, 3, 4, 5, 6, 7])
      .pipe(take(4))
      .subscribe((res) => {
        console.log('take custom data ', res);
      });

    // using take operator on HTTP client
    this.subsTwo = this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res: any) => {
      from(res)
        .pipe(take(2))
        .subscribe((response) => {
          console.log('modified http response ', response);
        });
    });

    // takeLast operator usage for manual Observable -> take takes first N parameter whereas takeLast takes N last elements
    this.subsThree = from([1, 2, 3, 4, 5, 6, 7, 8, 9])
      .pipe(takeLast(5))
      .subscribe((res) => {
        console.log('takeLast custom data ', res);
      });

    // using take operator on HTTP client
    this.SubsFour = this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res: any) => {
      from(res)
        .pipe(takeLast(2))
        .subscribe((response) => {
          console.log('modified http response ', response);
        });
    });
  }

  stopIt(){
    
  }
}

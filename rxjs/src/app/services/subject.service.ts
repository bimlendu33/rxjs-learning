import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  constructor() {}

  private shareableFieldSubject = new Subject();
  shareableField$ = this.shareableFieldSubject.asObservable();

  updateShareableField(value: any) {
    this.shareableFieldSubject.next(value);
  }
}

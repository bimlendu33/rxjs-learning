import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BehaviorSubjectService {
  constructor() {}

  private shareableFieldBehaviorSubject = new BehaviorSubject({ user: 'default user', type: 'default type' });
  shareableBehaviorSubjectField$ = this.shareableFieldBehaviorSubject.asObservable();

  updateShareableField(value: any) {
    this.shareableFieldBehaviorSubject.next(value);
  }
}

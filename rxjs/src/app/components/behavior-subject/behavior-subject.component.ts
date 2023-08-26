import { Component, OnInit } from '@angular/core';
import { BehaviorSubjectService } from 'src/app/services/behavior-subject.service';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.css'],
})
export class BehaviorSubjectComponent implements OnInit {
  constructor(private behaviorSubject: BehaviorSubjectService) {}

  ngOnInit(): void {}

  updateSuject(): void {
    this.behaviorSubject.updateShareableField({ user: 'Apple Fizz', type: 'drink' });
  }
}

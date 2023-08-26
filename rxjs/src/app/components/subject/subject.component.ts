import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
})
export class SubjectComponent implements OnInit {
  constructor(private subjectService: SubjectService) {}

  ngOnInit(): void {
    this.subjectService.updateShareableField({ user: 'default user', type: 'default type' });
  }

  updateSuject(): void {
    this.subjectService.updateShareableField({ user: 'Apple Fizz', type: 'drink' });
  }
}

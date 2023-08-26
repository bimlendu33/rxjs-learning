import { Component, OnInit } from '@angular/core';
import { BehaviorSubjectService } from 'src/app/services/behavior-subject.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-side-off-canvas',
  templateUrl: './side-off-canvas.component.html',
  styleUrls: ['./side-off-canvas.component.css'],
})
export class SideOffCanvasComponent implements OnInit {
  subjectData: any;
  behaviorSubjectData: any;

  constructor(private subjectService: SubjectService, private behaviorSubjectService: BehaviorSubjectService) {}

  ngOnInit(): void {
    this.subjectService.shareableField$.subscribe((res) => {
      this.subjectData = res;
    });

    this.behaviorSubjectService.shareableBehaviorSubjectField$.subscribe((res) => {
      this.behaviorSubjectData = res;
    });
  }
}

import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription, fromEvent, interval } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css'],
})
export class FromEventComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('firstCard', { static: true }) firstCard!: ElementRef;
  @ViewChild('secondCard', { static: true }) secondCard!: ElementRef;
  @ViewChild('thirdCard', { static: true }) thirdCard!: ElementRef;
  @ViewChild('enterEvent', { static: true }) enterEvent!: ElementRef;
  subsOne!: Subscription;
  subsTwo!: Subscription;
  subsThree!: Subscription;
  subsFour!: Subscription;
  subsFive!: Subscription;

  constructor() {
    console.log('----------------------------FROM Event Operator-----------------------------');
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // from-event is used to attach an event type to a particular DOM Object
    // we must use ngAfterViewInit before using from-event because events can be attached to DOM Object only after our view is fully ready and rendered

    // using for-event to bind mouse hover on a DOM element
    this.subsOne = fromEvent(this.firstCard.nativeElement, 'mouseenter').subscribe((res) => {
      console.log('First card I am hovered ', res);
    });

    // using for-event to bind mouse hover out on a DOM element
    this.subsTwo = fromEvent(this.firstCard.nativeElement, 'mouseout').subscribe((res) => {
      console.log('First card I am hovered out ', res);
    });

    // using for-event to bind double click on a DOM element
    this.subsThree = fromEvent(this.secondCard.nativeElement, 'dblclick').subscribe((res) => {
      console.log('I am double click', res);
    });

    // using for-event to bind mouse dragging on a DOM element
    this.subsThree = fromEvent(this.thirdCard.nativeElement, 'mousemove').subscribe((res) => {
      console.log('mouse is being moved', res);
    });

    // using for-event to bind keyup on a DOM element
    this.subsThree = fromEvent(this.enterEvent.nativeElement, 'keyup').subscribe((res: any) => {
      if (res.keyCode === 13) {
        console.log('enter has been pressed');
      }
    });
  }

  ngOnDestroy(): void {
    this.subsOne?.unsubscribe();
    this.subsTwo?.unsubscribe();
    this.subsThree?.unsubscribe();
    this.subsFour?.unsubscribe();
    this.subsFive?.unsubscribe();
  }
}

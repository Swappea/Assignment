import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  currentTime = Date.now();

  @Input() index: number;
  @Input() compTitle: string;

  constructor() { }

  ngOnInit() {
  }

}

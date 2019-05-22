import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() index: number;
  @Input() compTitle: string;

  randomText = '';

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.randomText = 'You clicked the button';
  }

}

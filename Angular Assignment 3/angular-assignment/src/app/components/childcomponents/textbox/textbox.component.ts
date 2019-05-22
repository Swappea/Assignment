import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {

  @Input() index: number;
  @Input() compTitle: string;

  constructor() { }

  ngOnInit() {
  }

}

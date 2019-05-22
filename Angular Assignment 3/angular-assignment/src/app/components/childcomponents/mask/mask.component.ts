import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mask',
  templateUrl: './mask.component.html',
  styleUrls: ['./mask.component.css']
})
export class MaskComponent implements OnInit {

  @Input() index: number;
  @Input() compTitle: string;

  constructor() { }

  ngOnInit() {
  }

}

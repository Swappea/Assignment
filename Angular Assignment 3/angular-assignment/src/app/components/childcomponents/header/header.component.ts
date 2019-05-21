import { Component, OnInit, Input } from '@angular/core';
import { ContainerComponentData } from '../../model/ContainerComponentData';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, ContainerComponentData {

  @Input() index: number;
  @Input() compTitle: string;

  constructor() { }

  ngOnInit() {
  }

}

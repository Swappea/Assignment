import { Component, OnInit, Input, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { WellInfo } from '../model/WellInfo';

@Component({
  selector: 'app-add-well-component',
  templateUrl: './add-well-component.component.html',
  styleUrls: ['./add-well-component.component.css']
})
export class AddWellComponentComponent implements OnInit {

  @ViewChild('wellName') wellName: ElementRef;
  @ViewChild('wellType') wellType: ElementRef;
  @ViewChild('sourceKey') sourceKey: ElementRef;
  @Output() notifyAddWellEvent = new EventEmitter();
  private validationMessage = '';

  constructor() { }

  ngOnInit() {
  }

  addNewWell() {
    this.validationMessage = '';
    const wellObj = new WellInfo();
    wellObj.name = this.wellName.nativeElement.value;
    wellObj.type = this.wellType.nativeElement.value;
    wellObj.sourceKey = this.sourceKey.nativeElement.value;

    if (wellObj.name && wellObj.type) {
      this.notifyAddWellEvent.emit(wellObj);
    } else {
      this.validationMessage = 'Please input well name or type before proceeding ahead';
    }
  }

}

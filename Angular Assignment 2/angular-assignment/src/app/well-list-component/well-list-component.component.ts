import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { WellDataService } from '../services/well-data.service';
import { WellInfo } from '../model/WellInfo';
import { AddWellComponentComponent } from '../add-well-component/add-well-component.component';

@Component({
  selector: 'app-well-list-component',
  templateUrl: './well-list-component.component.html',
  styleUrls: ['./well-list-component.component.css']
})
export class WellListComponentComponent implements OnInit {

  @ViewChild(AddWellComponentComponent) addWellCompRef: AddWellComponentComponent;

  private wellInfoData: WellInfo[];
  private showWellList: boolean;
  private loading: boolean;

  constructor(private getWellInfo: WellDataService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.wellInfoData = this.getWellInfo.getWellData();
    this.showWellList = true;
    this.loading = false;
  }

  loadWellForm(wellObj: WellInfo) {
    this.showWellList = false;
    this.cd.detectChanges();
    // setting child source key value using reference of child component
    this.addWellCompRef.sourceKey.nativeElement.value = wellObj.sourceKey;
  }

  notifyAddWellEvent(wellObj: WellInfo) {
    this.loading = true;
    this.showWellList = true;
    setTimeout(() => {
      this.getWellInfo.addWellData(wellObj);
      this.showWellList = true;
      this.loading = false;
    }, 2000);

  }

}

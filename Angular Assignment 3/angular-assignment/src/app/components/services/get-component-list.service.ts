import { Injectable } from '@angular/core';
import { ComponentType } from '../model/ComponentType';
import { HeaderComponent } from '../childcomponents/header/header.component';

@Injectable({
  providedIn: 'root'
})
export class GetComponentListService {

  private compListData: ComponentType[] = [
    new ComponentType(HeaderComponent, {index: 1, compTitle: 'Header'}),
    new ComponentType(HeaderComponent, {index: 2, compTitle: 'Table'}),
    new ComponentType(HeaderComponent, {index: 3, compTitle: 'Footer'}),
    new ComponentType(HeaderComponent, {index: 4, compTitle: 'Time'}),
    new ComponentType(HeaderComponent, {index: 5, compTitle: 'Dropdown'}),
    new ComponentType(HeaderComponent, {index: 6, compTitle: 'Spinner'}),
    new ComponentType(HeaderComponent, {index: 7, compTitle: 'Textbox'}),
    new ComponentType(HeaderComponent, {index: 8, compTitle: 'Button'}),
    new ComponentType(HeaderComponent, {index: 9, compTitle: 'Divider'}),
    new ComponentType(HeaderComponent, {index: 10, compTitle: 'Mask'}),
  ];

  constructor() { }

  getComponentList(): ComponentType[] {
    return this.compListData;
  }

}

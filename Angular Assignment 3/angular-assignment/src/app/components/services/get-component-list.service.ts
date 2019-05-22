import { Injectable } from '@angular/core';
import { ComponentType } from '../model/ComponentType';
import { HeaderComponent } from '../childcomponents/header/header.component';
import { FooterComponent } from '../childcomponents/footer/footer.component';
import { TableComponent } from '../childcomponents/table/table.component';
import { TimeComponent } from '../childcomponents/time/time.component';
import { DropdownComponent } from '../childcomponents/dropdown/dropdown.component';
import { SpinnerComponent } from '../childcomponents/spinner/spinner.component';
import { TextboxComponent } from '../childcomponents/textbox/textbox.component';
import { ButtonComponent } from '../childcomponents/button/button.component';
import { DividerComponent } from '../childcomponents/divider/divider.component';
import { MaskComponent } from '../childcomponents/mask/mask.component';

@Injectable({
  providedIn: 'root'
})
export class GetComponentListService {

  private compListData: ComponentType[] = [
    new ComponentType(HeaderComponent, {index: 1, compTitle: 'Header'}),
    new ComponentType(TableComponent, {index: 2, compTitle: 'Table'}),
    new ComponentType(FooterComponent, {index: 3, compTitle: 'Footer'}),
    new ComponentType(TimeComponent, {index: 4, compTitle: 'Time'}),
    new ComponentType(DropdownComponent, {index: 5, compTitle: 'Dropdown'}),
    new ComponentType(SpinnerComponent, {index: 6, compTitle: 'Spinner'}),
    new ComponentType(TextboxComponent, {index: 7, compTitle: 'Textbox'}),
    new ComponentType(ButtonComponent, {index: 8, compTitle: 'Button'}),
    new ComponentType(DividerComponent, {index: 9, compTitle: 'Divider'}),
    new ComponentType(MaskComponent, {index: 10, compTitle: 'Mask'}),
  ];

  constructor() { }

  getComponentList(): ComponentType[] {
    return this.compListData;
  }

}

import { Injectable } from '@angular/core';
import { WellInfo } from '../model/WellInfo';

@Injectable({
  providedIn: 'root'
})
export class WellDataService {

  wellData: WellInfo[] = [
    {
      id: 1,
      name: 'TestRLSWell01',
      type: 'rls',
      sourceKey: 10001
    },
    {
      id: 2,
      name: 'TestESPWell01',
      type: 'esp',
      sourceKey: 10001
    },
    {
      id: 3,
      name: 'TestRLSWell02',
      type: 'rls',
      sourceKey: 10001
    },
    {
      id: 4,
      name: 'TestRLSWell03',
      type: 'rls',
      sourceKey: 10002
    },
    {
      id: 5,
      name: 'TestESPWell02',
      type: 'esp',
      sourceKey: 10002
    },
    {
      id: 6,
      name: 'TestRLSWell04',
      type: 'rls',
      sourceKey: 10002
    }
  ];

  constructor() { }

  public getWellData(): WellInfo[] {
    return this.wellData;
  }

  public addWellData(wellObj: WellInfo): boolean {
    const key = 'id';
    const currLastId = this.wellData[this.wellData.length - 1][key];
    wellObj.id = currLastId + 1;
    this.wellData.push(Object.assign({}, wellObj));
    return true;
  }

}

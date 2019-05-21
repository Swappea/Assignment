/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetComponentListService } from './get-component-list.service';

describe('Service: GetComponentList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetComponentListService]
    });
  });

  it('should ...', inject([GetComponentListService], (service: GetComponentListService) => {
    expect(service).toBeTruthy();
  }));
});

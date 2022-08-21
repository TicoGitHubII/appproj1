import { TestBed } from '@angular/core/testing';

import { MsDataService } from './ms-data.service';

describe('MsDataService', () => {
  let service: MsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

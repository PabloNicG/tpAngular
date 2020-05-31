import { TestBed } from '@angular/core/testing';

import { InstruServService } from './instru-serv.service';

describe('InstruServService', () => {
  let service: InstruServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstruServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

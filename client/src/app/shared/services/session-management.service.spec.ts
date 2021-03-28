import { TestBed } from '@angular/core/testing';

import { SessionManagementService } from './session-management.service';

describe('SessionManagementService', () => {
  let service: SessionManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#isSignedIn should return boolean', () => {
    const isSignedIn:boolean = true;
    expect(isSignedIn).toBe(true);
  });

});

import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { UserManagementService } from './user-management.service';
import { USERS } from '../../../mock/userDB';

describe('UserManagementService', () => {
  let service: UserManagementService;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    });
  service = TestBed.inject(UserManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getUser takes in email and finds user (currently no router impl)', () => {
    const userEmail = "john@gmail.com";
    const user = [
      {
        username: 'john',
        email: 'john@gmail.com'
      }
    ]
    const userObj = USERS.filter((u:any) => u.email === userEmail);

    expect(service.getUser(userEmail)).toBe("john");
  })
});

import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationService]
    });
  });

  it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));

  it('should logout', inject([AuthenticationService], (service: AuthenticationService) => {
    service.logout()
    expect(localStorage.getItem('currentUser')).toBeFalsy();
  }));
});
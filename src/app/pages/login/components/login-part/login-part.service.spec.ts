import { TestBed, inject } from '@angular/core/testing';

import { LoginPartService } from './login-part.service';

describe('LoginPartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginPartService]
    });
  });

  it('should be created', inject([LoginPartService], (service: LoginPartService) => {
    expect(service).toBeTruthy();
  }));
});

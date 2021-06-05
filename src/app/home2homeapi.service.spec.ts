import { TestBed } from '@angular/core/testing';

import { Home2HomeApiService } from 'app/home2homeapi.service';

describe('Home2HomeApiService', () => {
  let service: Home2HomeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Home2HomeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

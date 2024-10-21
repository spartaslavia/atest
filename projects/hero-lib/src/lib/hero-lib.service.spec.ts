import { TestBed } from '@angular/core/testing';

import { HeroLibService } from './hero-lib.service';

describe('HeroLibService', () => {
  let service: HeroLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TelegramsService } from './telegrams.service';

describe('TelegramsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TelegramsService = TestBed.get(TelegramsService);
    expect(service).toBeTruthy();
  });
});

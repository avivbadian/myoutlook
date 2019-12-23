import { TestBed } from '@angular/core/testing';

import { FoldersService } from './folders.service';

describe('FoldersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoldersService = TestBed.get(FoldersService);
    expect(service).toBeTruthy();
  });
});

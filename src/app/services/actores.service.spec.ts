import { TestBed } from '@angular/core/testing';

import { ActoresService } from './actores.service';

describe('ActoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActoresService = TestBed.get(ActoresService);
    expect(service).toBeTruthy();
  });
});

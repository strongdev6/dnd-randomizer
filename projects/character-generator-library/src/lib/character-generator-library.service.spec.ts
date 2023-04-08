import { TestBed } from '@angular/core/testing';

import { CharacterGeneratorLibraryService } from './character-generator-library.service';

describe('CharacterGeneratorLibraryService', () => {
  let service: CharacterGeneratorLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterGeneratorLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

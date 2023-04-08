import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterGeneratorLibraryComponent } from './character-generator-library.component';

describe('CharacterGeneratorLibraryComponent', () => {
  let component: CharacterGeneratorLibraryComponent;
  let fixture: ComponentFixture<CharacterGeneratorLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterGeneratorLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterGeneratorLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

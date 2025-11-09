import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardsSenior } from './flashcards-senior';

describe('FlashcardsSenior', () => {
  let component: FlashcardsSenior;
  let fixture: ComponentFixture<FlashcardsSenior>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashcardsSenior]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashcardsSenior);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

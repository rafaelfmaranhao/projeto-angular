import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardsPleno } from './flashcards-pleno';

describe('FlashcardsPleno', () => {
  let component: FlashcardsPleno;
  let fixture: ComponentFixture<FlashcardsPleno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashcardsPleno]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashcardsPleno);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

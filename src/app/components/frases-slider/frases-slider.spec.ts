import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrasesSlider } from './frases-slider';

describe('FrasesSlider', () => {
  let component: FrasesSlider;
  let fixture: ComponentFixture<FrasesSlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrasesSlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrasesSlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

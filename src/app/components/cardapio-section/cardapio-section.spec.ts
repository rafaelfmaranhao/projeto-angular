import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioSection } from './cardapio-section';

describe('CardapioSection', () => {
  let component: CardapioSection;
  let fixture: ComponentFixture<CardapioSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardapioSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardapioSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

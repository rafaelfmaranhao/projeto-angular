import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logomarca } from './logomarca';

describe('Logomarca', () => {
  let component: Logomarca;
  let fixture: ComponentFixture<Logomarca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Logomarca]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Logomarca);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

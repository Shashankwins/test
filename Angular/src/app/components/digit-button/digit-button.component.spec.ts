import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitButtonComponent } from './digit-button.component';

describe('DigitButtonComponent', () => {
  let component: DigitButtonComponent;
  let fixture: ComponentFixture<DigitButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

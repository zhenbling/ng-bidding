import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPaymentComponent } from './first-payment.component';

describe('FirstPaymentComponent', () => {
  let component: FirstPaymentComponent;
  let fixture: ComponentFixture<FirstPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneCheckCodeComponent } from './phone-check-code.component';

describe('PhoneCheckCodeComponent', () => {
  let component: PhoneCheckCodeComponent;
  let fixture: ComponentFixture<PhoneCheckCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneCheckCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneCheckCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

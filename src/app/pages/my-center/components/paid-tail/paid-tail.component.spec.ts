import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidTailComponent } from './paid-tail.component';

describe('PaidTailComponent', () => {
  let component: PaidTailComponent;
  let fixture: ComponentFixture<PaidTailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidTailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidTailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

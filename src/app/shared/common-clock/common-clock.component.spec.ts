import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonClockComponent } from './common-clock.component';

describe('CommonClockComponent', () => {
  let component: CommonClockComponent;
  let fixture: ComponentFixture<CommonClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonClockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

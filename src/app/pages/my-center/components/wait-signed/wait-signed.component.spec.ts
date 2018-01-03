import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitSignedComponent } from './wait-signed.component';

describe('WaitSignedComponent', () => {
  let component: WaitSignedComponent;
  let fixture: ComponentFixture<WaitSignedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitSignedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitSignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

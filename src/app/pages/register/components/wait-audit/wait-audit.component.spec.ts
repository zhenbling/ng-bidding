import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitAuditComponent } from './wait-audit.component';

describe('WaitAuditComponent', () => {
  let component: WaitAuditComponent;
  let fixture: ComponentFixture<WaitAuditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitAuditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

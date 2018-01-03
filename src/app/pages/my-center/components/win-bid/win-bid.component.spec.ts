import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinBidComponent } from './win-bid.component';

describe('WinBidComponent', () => {
  let component: WinBidComponent;
  let fixture: ComponentFixture<WinBidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinBidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

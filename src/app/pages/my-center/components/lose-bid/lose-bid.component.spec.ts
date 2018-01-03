import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoseBidComponent } from './lose-bid.component';

describe('LoseBidComponent', () => {
  let component: LoseBidComponent;
  let fixture: ComponentFixture<LoseBidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoseBidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoseBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

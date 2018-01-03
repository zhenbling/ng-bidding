import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedGoodsComponent } from './received-goods.component';

describe('ReceivedGoodsComponent', () => {
  let component: ReceivedGoodsComponent;
  let fixture: ComponentFixture<ReceivedGoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedGoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

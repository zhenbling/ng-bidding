import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamineGoodsComponent } from './examine-goods.component';

describe('ExamineGoodsComponent', () => {
  let component: ExamineGoodsComponent;
  let fixture: ComponentFixture<ExamineGoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamineGoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamineGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

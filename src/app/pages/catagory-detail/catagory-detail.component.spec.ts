import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoryDetailComponent } from './catagory-detail.component';

describe('CatagoryDetailComponent', () => {
  let component: CatagoryDetailComponent;
  let fixture: ComponentFixture<CatagoryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatagoryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatagoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

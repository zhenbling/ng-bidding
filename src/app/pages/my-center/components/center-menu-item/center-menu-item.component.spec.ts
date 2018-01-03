import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterMenuItemComponent } from './center-menu-item.component';

describe('CenterMenuItemComponent', () => {
  let component: CenterMenuItemComponent;
  let fixture: ComponentFixture<CenterMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

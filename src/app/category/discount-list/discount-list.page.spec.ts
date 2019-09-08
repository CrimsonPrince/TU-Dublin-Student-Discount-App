import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountListPage } from './discount-list.page';

describe('DiscountListPage', () => {
  let component: DiscountListPage;
  let fixture: ComponentFixture<DiscountListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

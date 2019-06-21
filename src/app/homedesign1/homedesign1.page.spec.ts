import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homedesign1Page } from './homedesign1.page';

describe('Homedesign1Page', () => {
  let component: Homedesign1Page;
  let fixture: ComponentFixture<Homedesign1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homedesign1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homedesign1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

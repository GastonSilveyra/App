import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SacarFotoPage } from './sacar-foto.page';

describe('SacarFotoPage', () => {
  let component: SacarFotoPage;
  let fixture: ComponentFixture<SacarFotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SacarFotoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SacarFotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

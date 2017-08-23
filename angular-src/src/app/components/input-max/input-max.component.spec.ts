/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputMaxComponent } from './input-max.component';

describe('InputMaxComponent', () => {
  let component: InputMaxComponent;
  let fixture: ComponentFixture<InputMaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputMaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

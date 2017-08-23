/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputRepsComponent } from './input-reps.component';

describe('InputRepsComponent', () => {
  let component: InputRepsComponent;
  let fixture: ComponentFixture<InputRepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputRepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputRepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddleftoverComponent } from './addleftover.component';

describe('AddleftoverComponent', () => {
  let component: AddleftoverComponent;
  let fixture: ComponentFixture<AddleftoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddleftoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddleftoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

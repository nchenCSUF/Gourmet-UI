import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftoverComponent } from './leftover.component';

describe('LeftoverComponent', () => {
  let component: LeftoverComponent;
  let fixture: ComponentFixture<LeftoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

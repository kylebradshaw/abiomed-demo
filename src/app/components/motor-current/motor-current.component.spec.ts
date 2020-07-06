import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorCurrentComponent } from './motor-current.component';

describe('MotorCurrentComponent', () => {
  let component: MotorCurrentComponent;
  let fixture: ComponentFixture<MotorCurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotorCurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

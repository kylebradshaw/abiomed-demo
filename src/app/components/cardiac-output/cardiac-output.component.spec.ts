import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardiacOutputComponent } from './cardiac-output.component';

describe('CardiacOutputComponent', () => {
  let component: CardiacOutputComponent;
  let fixture: ComponentFixture<CardiacOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardiacOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardiacOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

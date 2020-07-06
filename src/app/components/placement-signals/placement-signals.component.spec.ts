import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementSignalsComponent } from './placement-signals.component';

describe('PlacementSignalsComponent', () => {
  let component: PlacementSignalsComponent;
  let fixture: ComponentFixture<PlacementSignalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacementSignalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

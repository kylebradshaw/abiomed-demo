import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpellaFlowComponent } from './impella-flow.component';

describe('ImpellaFlowComponent', () => {
  let component: ImpellaFlowComponent;
  let fixture: ComponentFixture<ImpellaFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpellaFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpellaFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

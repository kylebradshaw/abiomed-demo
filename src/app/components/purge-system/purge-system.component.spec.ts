import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurgeSystemComponent } from './purge-system.component';

describe('PurgeSystemComponent', () => {
  let component: PurgeSystemComponent;
  let fixture: ComponentFixture<PurgeSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurgeSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurgeSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

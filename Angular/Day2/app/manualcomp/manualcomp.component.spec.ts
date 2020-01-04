import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualcompComponent } from './manualcomp.component';

describe('ManualcompComponent', () => {
  let component: ManualcompComponent;
  let fixture: ComponentFixture<ManualcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

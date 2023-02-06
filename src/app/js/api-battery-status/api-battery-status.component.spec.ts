import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiBatteryStatusComponent } from './api-battery-status.component';

describe('ApiBatteryStatusComponent', () => {
  let component: ApiBatteryStatusComponent;
  let fixture: ComponentFixture<ApiBatteryStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiBatteryStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiBatteryStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

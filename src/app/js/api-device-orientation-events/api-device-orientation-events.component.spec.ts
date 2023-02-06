import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDeviceOrientationEventsComponent } from './api-device-orientation-events.component';

describe('ApiDeviceOrientationEventsComponent', () => {
  let component: ApiDeviceOrientationEventsComponent;
  let fixture: ComponentFixture<ApiDeviceOrientationEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiDeviceOrientationEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiDeviceOrientationEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

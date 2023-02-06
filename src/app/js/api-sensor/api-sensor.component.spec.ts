import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiSensorComponent } from './api-sensor.component';

describe('ApiSensorComponent', () => {
  let component: ApiSensorComponent;
  let fixture: ComponentFixture<ApiSensorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiSensorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

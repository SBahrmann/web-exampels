import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiVibrationComponent } from './api-vibration.component';

describe('ApiVibrationComponent', () => {
  let component: ApiVibrationComponent;
  let fixture: ComponentFixture<ApiVibrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiVibrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiVibrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

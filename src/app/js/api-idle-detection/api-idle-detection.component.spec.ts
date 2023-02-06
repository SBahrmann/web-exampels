import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiIdleDetectionComponent } from './api-idle-detection.component';

describe('ApiIdleDetectionComponent', () => {
  let component: ApiIdleDetectionComponent;
  let fixture: ComponentFixture<ApiIdleDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiIdleDetectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiIdleDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

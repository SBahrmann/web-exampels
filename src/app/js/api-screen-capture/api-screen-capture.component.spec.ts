import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiScreenCaptureComponent } from './api-screen-capture.component';

describe('ApiScreenCaptureComponent', () => {
  let component: ApiScreenCaptureComponent;
  let fixture: ComponentFixture<ApiScreenCaptureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiScreenCaptureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiScreenCaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

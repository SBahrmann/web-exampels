import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiMediaStreamImageCaptureComponent } from './api-media-stream-image-capture.component';

describe('ApiMediaStreamImageCaptureComponent', () => {
  let component: ApiMediaStreamImageCaptureComponent;
  let fixture: ComponentFixture<ApiMediaStreamImageCaptureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiMediaStreamImageCaptureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiMediaStreamImageCaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiMediaCaptureAndStreamsComponent } from './api-media-capture-and-streams.component';

describe('ApiMediaCaptureAndStreamsComponent', () => {
  let component: ApiMediaCaptureAndStreamsComponent;
  let fixture: ComponentFixture<ApiMediaCaptureAndStreamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiMediaCaptureAndStreamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiMediaCaptureAndStreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

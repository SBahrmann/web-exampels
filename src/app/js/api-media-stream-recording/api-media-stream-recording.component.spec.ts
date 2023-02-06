import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiMediaStreamRecordingComponent } from './api-media-stream-recording.component';

describe('ApiMediaStreamRecordingComponent', () => {
  let component: ApiMediaStreamRecordingComponent;
  let fixture: ComponentFixture<ApiMediaStreamRecordingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiMediaStreamRecordingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiMediaStreamRecordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

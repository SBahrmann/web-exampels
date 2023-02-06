import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCompressionStreamsComponent } from './api-compression-streams.component';

describe('ApiCompressionStreamsComponent', () => {
  let component: ApiCompressionStreamsComponent;
  let fixture: ComponentFixture<ApiCompressionStreamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiCompressionStreamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiCompressionStreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiStreamsComponent } from './api-streams.component';

describe('ApiStreamsComponent', () => {
  let component: ApiStreamsComponent;
  let fixture: ComponentFixture<ApiStreamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiStreamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiStreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

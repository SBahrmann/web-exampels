import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiTouchEventsComponent } from './api-touch-events.component';

describe('ApiTouchEventsComponent', () => {
  let component: ApiTouchEventsComponent;
  let fixture: ComponentFixture<ApiTouchEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiTouchEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiTouchEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

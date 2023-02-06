import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiProximityEventsComponent } from './api-proximity-events.component';

describe('ApiProximityEventsComponent', () => {
  let component: ApiProximityEventsComponent;
  let fixture: ComponentFixture<ApiProximityEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiProximityEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiProximityEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

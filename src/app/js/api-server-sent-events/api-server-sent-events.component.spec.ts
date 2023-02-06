import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiServerSentEventsComponent } from './api-server-sent-events.component';

describe('ApiServerSentEventsComponent', () => {
  let component: ApiServerSentEventsComponent;
  let fixture: ComponentFixture<ApiServerSentEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiServerSentEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiServerSentEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

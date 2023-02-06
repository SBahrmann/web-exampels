import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiChannelMessagingComponent } from './api-channel-messaging.component';

describe('ApiChannelMessagingComponent', () => {
  let component: ApiChannelMessagingComponent;
  let fixture: ComponentFixture<ApiChannelMessagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiChannelMessagingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiChannelMessagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

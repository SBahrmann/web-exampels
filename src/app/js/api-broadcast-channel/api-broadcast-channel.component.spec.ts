import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiBroadcastChannelComponent } from './api-broadcast-channel.component';

describe('ApiBroadcastChannelComponent', () => {
  let component: ApiBroadcastChannelComponent;
  let fixture: ComponentFixture<ApiBroadcastChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiBroadcastChannelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiBroadcastChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

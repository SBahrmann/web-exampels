import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiUiEventsComponent } from './api-ui-events.component';

describe('ApiUiEventsComponent', () => {
  let component: ApiUiEventsComponent;
  let fixture: ComponentFixture<ApiUiEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiUiEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiUiEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

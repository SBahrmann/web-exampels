import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPointerEventsComponent } from './api-pointer-events.component';

describe('ApiPointerEventsComponent', () => {
  let component: ApiPointerEventsComponent;
  let fixture: ComponentFixture<ApiPointerEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiPointerEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiPointerEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

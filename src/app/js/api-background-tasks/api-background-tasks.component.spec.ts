import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiBackgroundTasksComponent } from './api-background-tasks.component';

describe('ApiBackgroundTasksComponent', () => {
  let component: ApiBackgroundTasksComponent;
  let fixture: ComponentFixture<ApiBackgroundTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiBackgroundTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiBackgroundTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

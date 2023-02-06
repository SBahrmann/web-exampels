import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPrioritizedTaskSchedulingComponent } from './api-prioritized-task-scheduling.component';

describe('ApiPrioritizedTaskSchedulingComponent', () => {
  let component: ApiPrioritizedTaskSchedulingComponent;
  let fixture: ComponentFixture<ApiPrioritizedTaskSchedulingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiPrioritizedTaskSchedulingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiPrioritizedTaskSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

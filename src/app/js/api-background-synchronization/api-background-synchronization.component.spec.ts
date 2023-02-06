import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiBackgroundSynchronizationComponent } from './api-background-synchronization.component';

describe('ApiBackgroundSynchronizationComponent', () => {
  let component: ApiBackgroundSynchronizationComponent;
  let fixture: ComponentFixture<ApiBackgroundSynchronizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiBackgroundSynchronizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiBackgroundSynchronizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

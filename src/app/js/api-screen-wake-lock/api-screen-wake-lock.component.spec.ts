import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiScreenWakeLockComponent } from './api-screen-wake-lock.component';

describe('ApiScreenWakeLockComponent', () => {
  let component: ApiScreenWakeLockComponent;
  let fixture: ComponentFixture<ApiScreenWakeLockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiScreenWakeLockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiScreenWakeLockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

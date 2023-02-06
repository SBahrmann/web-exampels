import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPointerLockComponent } from './api-pointer-lock.component';

describe('ApiPointerLockComponent', () => {
  let component: ApiPointerLockComponent;
  let fixture: ComponentFixture<ApiPointerLockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiPointerLockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiPointerLockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

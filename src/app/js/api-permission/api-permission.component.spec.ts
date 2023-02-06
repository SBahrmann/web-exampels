import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPermissionComponent } from './api-permission.component';

describe('ApiPermissionComponent', () => {
  let component: ApiPermissionComponent;
  let fixture: ComponentFixture<ApiPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiPermissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

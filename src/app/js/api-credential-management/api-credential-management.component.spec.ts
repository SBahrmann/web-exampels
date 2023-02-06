import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCredentialManagementComponent } from './api-credential-management.component';

describe('ApiCredentialManagementComponent', () => {
  let component: ApiCredentialManagementComponent;
  let fixture: ComponentFixture<ApiCredentialManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiCredentialManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiCredentialManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

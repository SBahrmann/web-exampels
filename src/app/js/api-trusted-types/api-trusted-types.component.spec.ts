import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiTrustedTypesComponent } from './api-trusted-types.component';

describe('ApiTrustedTypesComponent', () => {
  let component: ApiTrustedTypesComponent;
  let fixture: ComponentFixture<ApiTrustedTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiTrustedTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiTrustedTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

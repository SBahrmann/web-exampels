import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiReportingComponent } from './api-reporting.component';

describe('ApiReportingComponent', () => {
  let component: ApiReportingComponent;
  let fixture: ComponentFixture<ApiReportingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiReportingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

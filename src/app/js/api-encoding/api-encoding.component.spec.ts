import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiEncodingComponent } from './api-encoding.component';

describe('ApiEncodingComponent', () => {
  let component: ApiEncodingComponent;
  let fixture: ComponentFixture<ApiEncodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiEncodingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiEncodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPaymentRequestComponent } from './api-payment-request.component';

describe('ApiPaymentRequestComponent', () => {
  let component: ApiPaymentRequestComponent;
  let fixture: ComponentFixture<ApiPaymentRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiPaymentRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiPaymentRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

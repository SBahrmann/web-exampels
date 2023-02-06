import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPaymentHandlerComponent } from './api-payment-handler.component';

describe('ApiPaymentHandlerComponent', () => {
  let component: ApiPaymentHandlerComponent;
  let fixture: ComponentFixture<ApiPaymentHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiPaymentHandlerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiPaymentHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiBarcodeDetectionComponent } from './api-barcode-detection.component';

describe('ApiBarcodeDetectionComponent', () => {
  let component: ApiBarcodeDetectionComponent;
  let fixture: ComponentFixture<ApiBarcodeDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiBarcodeDetectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiBarcodeDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

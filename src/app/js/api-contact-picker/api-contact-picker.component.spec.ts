import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiContactPickerComponent } from './api-contact-picker.component';

describe('ApiContactPickerComponent', () => {
  let component: ApiContactPickerComponent;
  let fixture: ComponentFixture<ApiContactPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiContactPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiContactPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCssPropertiesAnsValuesComponent } from './api-css-properties-ans-values.component';

describe('ApiCssPropertiesAnsValuesComponent', () => {
  let component: ApiCssPropertiesAnsValuesComponent;
  let fixture: ComponentFixture<ApiCssPropertiesAnsValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiCssPropertiesAnsValuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiCssPropertiesAnsValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

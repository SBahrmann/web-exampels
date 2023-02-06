import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCssObjectModelComponent } from './api-css-object-model.component';

describe('ApiCssObjectModelComponent', () => {
  let component: ApiCssObjectModelComponent;
  let fixture: ComponentFixture<ApiCssObjectModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiCssObjectModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiCssObjectModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

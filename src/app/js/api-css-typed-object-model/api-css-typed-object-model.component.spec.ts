import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCssTypedObjectModelComponent } from './api-css-typed-object-model.component';

describe('ApiCssTypedObjectModelComponent', () => {
  let component: ApiCssTypedObjectModelComponent;
  let fixture: ComponentFixture<ApiCssTypedObjectModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiCssTypedObjectModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiCssTypedObjectModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

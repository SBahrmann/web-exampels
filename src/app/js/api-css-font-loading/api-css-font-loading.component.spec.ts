import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCssFontLoadingComponent } from './api-css-font-loading.component';

describe('ApiCssFontLoadingComponent', () => {
  let component: ApiCssFontLoadingComponent;
  let fixture: ComponentFixture<ApiCssFontLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiCssFontLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiCssFontLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

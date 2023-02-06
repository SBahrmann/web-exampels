import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCookieStoreComponent } from './api-cookie-store.component';

describe('ApiCookieStoreComponent', () => {
  let component: ApiCookieStoreComponent;
  let fixture: ComponentFixture<ApiCookieStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiCookieStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiCookieStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

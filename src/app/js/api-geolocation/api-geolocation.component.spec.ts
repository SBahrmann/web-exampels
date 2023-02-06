import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiGeolocationComponent } from './api-geolocation.component';

describe('ApiGeolocationComponent', () => {
  let component: ApiGeolocationComponent;
  let fixture: ComponentFixture<ApiGeolocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiGeolocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiGeolocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

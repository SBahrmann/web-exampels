import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiBackgroundFetchComponent } from './api-background-fetch.component';

describe('ApiBackgroundFetchComponent', () => {
  let component: ApiBackgroundFetchComponent;
  let fixture: ComponentFixture<ApiBackgroundFetchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiBackgroundFetchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiBackgroundFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

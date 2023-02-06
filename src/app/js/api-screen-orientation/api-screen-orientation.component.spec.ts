import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiScreenOrientationComponent } from './api-screen-orientation.component';

describe('ApiScreenOrientationComponent', () => {
  let component: ApiScreenOrientationComponent;
  let fixture: ComponentFixture<ApiScreenOrientationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiScreenOrientationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiScreenOrientationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

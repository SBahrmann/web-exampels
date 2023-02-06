import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiEyedropperComponent } from './api-eyedropper.component';

describe('ApiEyedropperComponent', () => {
  let component: ApiEyedropperComponent;
  let fixture: ComponentFixture<ApiEyedropperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiEyedropperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiEyedropperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

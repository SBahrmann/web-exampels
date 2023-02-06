import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiGamepadComponent } from './api-gamepad.component';

describe('ApiGamepadComponent', () => {
  let component: ApiGamepadComponent;
  let fixture: ComponentFixture<ApiGamepadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiGamepadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiGamepadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

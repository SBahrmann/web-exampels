import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiVisualViewportComponent } from './api-visual-viewport.component';

describe('ApiVisualViewportComponent', () => {
  let component: ApiVisualViewportComponent;
  let fixture: ComponentFixture<ApiVisualViewportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiVisualViewportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiVisualViewportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

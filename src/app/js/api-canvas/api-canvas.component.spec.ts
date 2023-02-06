import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCanvasComponent } from './api-canvas.component';

describe('ApiCanvasComponent', () => {
  let component: ApiCanvasComponent;
  let fixture: ComponentFixture<ApiCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiCanvasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

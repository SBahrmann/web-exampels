import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiFullscreenComponent } from './api-fullscreen.component';

describe('ApiFullscreenComponent', () => {
  let component: ApiFullscreenComponent;
  let fixture: ComponentFixture<ApiFullscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiFullscreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiFullscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

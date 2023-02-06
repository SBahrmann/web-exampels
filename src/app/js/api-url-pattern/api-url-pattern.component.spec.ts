import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiUrlPatternComponent } from './api-url-pattern.component';

describe('ApiUrlPatternComponent', () => {
  let component: ApiUrlPatternComponent;
  let fixture: ComponentFixture<ApiUrlPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiUrlPatternComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiUrlPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

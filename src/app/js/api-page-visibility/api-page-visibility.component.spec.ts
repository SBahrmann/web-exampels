import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPageVisibilityComponent } from './api-page-visibility.component';

describe('ApiPageVisibilityComponent', () => {
  let component: ApiPageVisibilityComponent;
  let fixture: ComponentFixture<ApiPageVisibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiPageVisibilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiPageVisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiNavigationComponent } from './api-navigation.component';

describe('ApiNavigationComponent', () => {
  let component: ApiNavigationComponent;
  let fixture: ComponentFixture<ApiNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

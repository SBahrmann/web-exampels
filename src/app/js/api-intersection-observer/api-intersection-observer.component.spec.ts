import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiIntersectionObserverComponent } from './api-intersection-observer.component';

describe('ApiIntersectionObserverComponent', () => {
  let component: ApiIntersectionObserverComponent;
  let fixture: ComponentFixture<ApiIntersectionObserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiIntersectionObserverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiIntersectionObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiResizeObserverComponent } from './api-resize-observer.component';

describe('ApiResizeObserverComponent', () => {
  let component: ApiResizeObserverComponent;
  let fixture: ComponentFixture<ApiResizeObserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiResizeObserverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiResizeObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

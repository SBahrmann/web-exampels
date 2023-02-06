import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiServiceWorkerComponent } from './api-service-worker.component';

describe('ApiServiceWorkerComponent', () => {
  let component: ApiServiceWorkerComponent;
  let fixture: ComponentFixture<ApiServiceWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiServiceWorkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiServiceWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiLayoutInstabilityComponent } from './api-layout-instability.component';

describe('ApiLayoutInstabilityComponent', () => {
  let component: ApiLayoutInstabilityComponent;
  let fixture: ComponentFixture<ApiLayoutInstabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiLayoutInstabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiLayoutInstabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

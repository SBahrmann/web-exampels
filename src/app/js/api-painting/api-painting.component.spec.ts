import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPaintingComponent } from './api-painting.component';

describe('ApiPaintingComponent', () => {
  let component: ApiPaintingComponent;
  let fixture: ComponentFixture<ApiPaintingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiPaintingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiPaintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

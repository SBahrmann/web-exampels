import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPresentationComponent } from './api-presentation.component';

describe('ApiPresentationComponent', () => {
  let component: ApiPresentationComponent;
  let fixture: ComponentFixture<ApiPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

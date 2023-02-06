import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiInkComponent } from './api-ink.component';

describe('ApiInkComponent', () => {
  let component: ApiInkComponent;
  let fixture: ComponentFixture<ApiInkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiInkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiInkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiContentIndexComponent } from './api-content-index.component';

describe('ApiContentIndexComponent', () => {
  let component: ApiContentIndexComponent;
  let fixture: ComponentFixture<ApiContentIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiContentIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiContentIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

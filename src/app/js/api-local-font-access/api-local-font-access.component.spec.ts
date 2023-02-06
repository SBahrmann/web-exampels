import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiLocalFontAccessComponent } from './api-local-font-access.component';

describe('ApiLocalFontAccessComponent', () => {
  let component: ApiLocalFontAccessComponent;
  let fixture: ComponentFixture<ApiLocalFontAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiLocalFontAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiLocalFontAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

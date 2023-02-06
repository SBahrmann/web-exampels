import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorFontsV1Component } from './color-fonts-v1.component';

describe('ColorFontsV1Component', () => {
  let component: ColorFontsV1Component;
  let fixture: ComponentFixture<ColorFontsV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorFontsV1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorFontsV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

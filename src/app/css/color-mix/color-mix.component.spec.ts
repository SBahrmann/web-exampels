import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorMixComponent } from './color-mix.component';

describe('ColorMixComponent', () => {
  let component: ColorMixComponent;
  let fixture: ComponentFixture<ColorMixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorMixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorMixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

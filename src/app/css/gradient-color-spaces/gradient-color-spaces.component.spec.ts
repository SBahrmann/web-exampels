import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientColorSpacesComponent } from './gradient-color-spaces.component';

describe('GradientColorSpacesComponent', () => {
  let component: GradientColorSpacesComponent;
  let fixture: ComponentFixture<GradientColorSpacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradientColorSpacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradientColorSpacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

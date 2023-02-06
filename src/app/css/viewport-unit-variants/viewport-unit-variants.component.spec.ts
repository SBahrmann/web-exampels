import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewportUnitVariantsComponent } from './viewport-unit-variants.component';

describe('ViewportUnitVariantsComponent', () => {
  let component: ViewportUnitVariantsComponent;
  let fixture: ComponentFixture<ViewportUnitVariantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewportUnitVariantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewportUnitVariantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

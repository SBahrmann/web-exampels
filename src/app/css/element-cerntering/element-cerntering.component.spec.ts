import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementCernteringComponent } from './element-cerntering.component';

describe('ElementCernteringComponent', () => {
  let component: ElementCernteringComponent;
  let fixture: ComponentFixture<ElementCernteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementCernteringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementCernteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

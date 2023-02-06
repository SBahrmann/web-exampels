import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InertComponent } from './inert.component';

describe('InertComponent', () => {
  let component: InertComponent;
  let fixture: ComponentFixture<InertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

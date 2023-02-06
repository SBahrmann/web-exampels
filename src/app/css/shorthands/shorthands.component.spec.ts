import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShorthandsComponent } from './shorthands.component';

describe('ShorthandsComponent', () => {
  let component: ShorthandsComponent;
  let fixture: ComponentFixture<ShorthandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShorthandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShorthandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

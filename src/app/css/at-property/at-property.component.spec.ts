import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtPropertyComponent } from './at-property.component';

describe('AtPropertyComponent', () => {
  let component: AtPropertyComponent;
  let fixture: ComponentFixture<AtPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtPropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

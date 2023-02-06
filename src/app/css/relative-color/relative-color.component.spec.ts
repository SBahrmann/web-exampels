import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelativeColorComponent } from './relative-color.component';

describe('RelativeColorComponent', () => {
  let component: RelativeColorComponent;
  let fixture: ComponentFixture<RelativeColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelativeColorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelativeColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtCustomMediaComponent } from './at-custom-media.component';

describe('AtCustomMediaComponent', () => {
  let component: AtCustomMediaComponent;
  let fixture: ComponentFixture<AtCustomMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtCustomMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtCustomMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

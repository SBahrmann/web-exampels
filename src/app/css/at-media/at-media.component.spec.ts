import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtMediaComponent } from './at-media.component';

describe('AtMediaComponent', () => {
  let component: AtMediaComponent;
  let fixture: ComponentFixture<AtMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

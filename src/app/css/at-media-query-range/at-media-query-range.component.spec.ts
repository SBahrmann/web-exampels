import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtMediaQueryRangeComponent } from './at-media-query-range.component';

describe('AtMediaQueryRangeComponent', () => {
  let component: AtMediaQueryRangeComponent;
  let fixture: ComponentFixture<AtMediaQueryRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtMediaQueryRangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtMediaQueryRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

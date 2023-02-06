import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollStartComponent } from './scroll-start.component';

describe('ScrollStartComponent', () => {
  let component: ScrollStartComponent;
  let fixture: ComponentFixture<ScrollStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

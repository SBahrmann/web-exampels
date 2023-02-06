import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderInlineComponent } from './border-inline.component';

describe('BorderInlineComponent', () => {
  let component: BorderInlineComponent;
  let fixture: ComponentFixture<BorderInlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorderInlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorderInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorHasComponent } from './selector-has.component';

describe('SelectorHasComponent', () => {
  let component: SelectorHasComponent;
  let fixture: ComponentFixture<SelectorHasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorHasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectorHasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

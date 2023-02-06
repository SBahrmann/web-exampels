import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorNotComponent } from './selector-not.component';

describe('SelectorNotComponent', () => {
  let component: SelectorNotComponent;
  let fixture: ComponentFixture<SelectorNotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorNotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectorNotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

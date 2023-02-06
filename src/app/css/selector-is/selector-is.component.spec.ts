import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorIsComponent } from './selector-is.component';

describe('SelectorIsComponent', () => {
  let component: SelectorIsComponent;
  let fixture: ComponentFixture<SelectorIsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorIsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectorIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

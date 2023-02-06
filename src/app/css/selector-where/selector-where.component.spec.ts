import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorWhereComponent } from './selector-where.component';

describe('SelectorWhereComponent', () => {
  let component: SelectorWhereComponent;
  let fixture: ComponentFixture<SelectorWhereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectorWhereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectorWhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

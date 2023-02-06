import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtWhenElseComponent } from './at-when-else.component';

describe('AtWhenElseComponent', () => {
  let component: AtWhenElseComponent;
  let fixture: ComponentFixture<AtWhenElseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtWhenElseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtWhenElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

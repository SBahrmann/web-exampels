import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtNestComponent } from './at-nest.component';

describe('AtNestComponent', () => {
  let component: AtNestComponent;
  let fixture: ComponentFixture<AtNestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtNestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtNestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

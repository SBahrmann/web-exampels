import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapTargetComponent } from './snap-target.component';

describe('SnapTargetComponent', () => {
  let component: SnapTargetComponent;
  let fixture: ComponentFixture<SnapTargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnapTargetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnapTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

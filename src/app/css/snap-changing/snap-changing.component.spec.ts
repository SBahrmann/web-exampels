import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapChangingComponent } from './snap-changing.component';

describe('SnapChangingComponent', () => {
  let component: SnapChangingComponent;
  let fixture: ComponentFixture<SnapChangingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnapChangingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnapChangingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtContainerComponent } from './at-container.component';

describe('AtContainerComponent', () => {
  let component: AtContainerComponent;
  let fixture: ComponentFixture<AtContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

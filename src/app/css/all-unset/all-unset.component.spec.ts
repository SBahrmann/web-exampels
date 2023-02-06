import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUnsetComponent } from './all-unset.component';

describe('AllUnsetComponent', () => {
  let component: AllUnsetComponent;
  let fixture: ComponentFixture<AllUnsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllUnsetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllUnsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

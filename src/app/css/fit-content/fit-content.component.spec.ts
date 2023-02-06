import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitContentComponent } from './fit-content.component';

describe('FitContentComponent', () => {
  let component: FitContentComponent;
  let fixture: ComponentFixture<FitContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

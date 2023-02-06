import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtScopeComponent } from './at-scope.component';

describe('AtScopeComponent', () => {
  let component: AtScopeComponent;
  let fixture: ComponentFixture<AtScopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtScopeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtScopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

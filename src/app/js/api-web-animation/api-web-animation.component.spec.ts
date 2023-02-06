import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiWebAnimationComponent } from './api-web-animation.component';

describe('ApiWebAnimationComponent', () => {
  let component: ApiWebAnimationComponent;
  let fixture: ComponentFixture<ApiWebAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiWebAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiWebAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

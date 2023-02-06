import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPushComponent } from './api-push.component';

describe('ApiPushComponent', () => {
  let component: ApiPushComponent;
  let fixture: ComponentFixture<ApiPushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiPushComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

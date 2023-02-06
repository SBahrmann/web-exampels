import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiMediaSessionComponent } from './api-media-session.component';

describe('ApiMediaSessionComponent', () => {
  let component: ApiMediaSessionComponent;
  let fixture: ComponentFixture<ApiMediaSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiMediaSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiMediaSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiMediaSourceComponent } from './api-media-source.component';

describe('ApiMediaSourceComponent', () => {
  let component: ApiMediaSourceComponent;
  let fixture: ComponentFixture<ApiMediaSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiMediaSourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiMediaSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

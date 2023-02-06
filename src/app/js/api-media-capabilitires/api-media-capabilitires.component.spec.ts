import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiMediaCapabilitiresComponent } from './api-media-capabilitires.component';

describe('ApiMediaCapabilitiresComponent', () => {
  let component: ApiMediaCapabilitiresComponent;
  let fixture: ComponentFixture<ApiMediaCapabilitiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiMediaCapabilitiresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiMediaCapabilitiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

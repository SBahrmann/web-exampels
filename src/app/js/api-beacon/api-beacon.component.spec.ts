import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiBeaconComponent } from './api-beacon.component';

describe('ApiBeaconComponent', () => {
  let component: ApiBeaconComponent;
  let fixture: ComponentFixture<ApiBeaconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiBeaconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiBeaconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

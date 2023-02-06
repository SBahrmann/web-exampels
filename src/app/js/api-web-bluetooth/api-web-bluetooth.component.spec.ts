import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiWebBluetoothComponent } from './api-web-bluetooth.component';

describe('ApiWebBluetoothComponent', () => {
  let component: ApiWebBluetoothComponent;
  let fixture: ComponentFixture<ApiWebBluetoothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiWebBluetoothComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiWebBluetoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

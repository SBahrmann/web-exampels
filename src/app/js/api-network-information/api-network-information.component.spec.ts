import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiNetworkInformationComponent } from './api-network-information.component';

describe('ApiNetworkInformationComponent', () => {
  let component: ApiNetworkInformationComponent;
  let fixture: ComponentFixture<ApiNetworkInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiNetworkInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiNetworkInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

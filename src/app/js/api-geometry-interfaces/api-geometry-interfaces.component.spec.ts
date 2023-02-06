import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiGeometryInterfacesComponent } from './api-geometry-interfaces.component';

describe('ApiGeometryInterfacesComponent', () => {
  let component: ApiGeometryInterfacesComponent;
  let fixture: ComponentFixture<ApiGeometryInterfacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiGeometryInterfacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiGeometryInterfacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiStorageAccessComponent } from './api-storage-access.component';

describe('ApiStorageAccessComponent', () => {
  let component: ApiStorageAccessComponent;
  let fixture: ComponentFixture<ApiStorageAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiStorageAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiStorageAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

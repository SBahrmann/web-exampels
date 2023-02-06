import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiStorageComponent } from './api-storage.component';

describe('ApiStorageComponent', () => {
  let component: ApiStorageComponent;
  let fixture: ComponentFixture<ApiStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiStorageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

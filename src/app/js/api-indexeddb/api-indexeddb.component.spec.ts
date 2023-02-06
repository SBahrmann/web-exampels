import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiIndexeddbComponent } from './api-indexeddb.component';

describe('ApiIndexeddbComponent', () => {
  let component: ApiIndexeddbComponent;
  let fixture: ComponentFixture<ApiIndexeddbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiIndexeddbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiIndexeddbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

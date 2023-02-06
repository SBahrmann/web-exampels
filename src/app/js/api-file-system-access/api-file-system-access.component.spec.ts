import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiFileSystemAccessComponent } from './api-file-system-access.component';

describe('ApiFileSystemAccessComponent', () => {
  let component: ApiFileSystemAccessComponent;
  let fixture: ComponentFixture<ApiFileSystemAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiFileSystemAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiFileSystemAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

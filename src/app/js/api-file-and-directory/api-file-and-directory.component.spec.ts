import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiFileAndDirectoryComponent } from './api-file-and-directory.component';

describe('ApiFileAndDirectoryComponent', () => {
  let component: ApiFileAndDirectoryComponent;
  let fixture: ComponentFixture<ApiFileAndDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiFileAndDirectoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiFileAndDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

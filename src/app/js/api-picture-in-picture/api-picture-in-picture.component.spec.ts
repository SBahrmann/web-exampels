import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPictureInPictureComponent } from './api-picture-in-picture.component';

describe('ApiPictureInPictureComponent', () => {
  let component: ApiPictureInPictureComponent;
  let fixture: ComponentFixture<ApiPictureInPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiPictureInPictureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiPictureInPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

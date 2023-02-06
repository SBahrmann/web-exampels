import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiEncryptedMediaExtentionsComponent } from './api-encrypted-media-extentions.component';

describe('ApiEncryptedMediaExtentionsComponent', () => {
  let component: ApiEncryptedMediaExtentionsComponent;
  let fixture: ComponentFixture<ApiEncryptedMediaExtentionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiEncryptedMediaExtentionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiEncryptedMediaExtentionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

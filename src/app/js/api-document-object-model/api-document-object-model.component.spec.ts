import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiDocumentObjectModelComponent } from './api-document-object-model.component';

describe('ApiDocumentObjectModelComponent', () => {
  let component: ApiDocumentObjectModelComponent;
  let fixture: ComponentFixture<ApiDocumentObjectModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiDocumentObjectModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiDocumentObjectModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

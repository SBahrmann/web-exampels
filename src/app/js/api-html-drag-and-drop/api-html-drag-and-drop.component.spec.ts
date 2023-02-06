import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiHtmlDragAndDropComponent } from './api-html-drag-and-drop.component';

describe('ApiHtmlDragAndDropComponent', () => {
  let component: ApiHtmlDragAndDropComponent;
  let fixture: ComponentFixture<ApiHtmlDragAndDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiHtmlDragAndDropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiHtmlDragAndDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

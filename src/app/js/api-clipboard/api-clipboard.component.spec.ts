import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiClipboardComponent } from './api-clipboard.component';

describe('ApiClipboardComponent', () => {
  let component: ApiClipboardComponent;
  let fixture: ComponentFixture<ApiClipboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiClipboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiClipboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

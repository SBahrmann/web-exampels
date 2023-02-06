import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiHtmlSanitizerComponent } from './api-html-sanitizer.component';

describe('ApiHtmlSanitizerComponent', () => {
  let component: ApiHtmlSanitizerComponent;
  let fixture: ComponentFixture<ApiHtmlSanitizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiHtmlSanitizerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiHtmlSanitizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

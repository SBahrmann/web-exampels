import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiHtmlDomComponent } from './api-html-dom.component';

describe('ApiHtmlDomComponent', () => {
  let component: ApiHtmlDomComponent;
  let fixture: ComponentFixture<ApiHtmlDomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiHtmlDomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiHtmlDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

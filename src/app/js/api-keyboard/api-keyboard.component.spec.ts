import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiKeyboardComponent } from './api-keyboard.component';

describe('ApiKeyboardComponent', () => {
  let component: ApiKeyboardComponent;
  let fixture: ComponentFixture<ApiKeyboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiKeyboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

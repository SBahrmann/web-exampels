import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiVirtualkeyboardComponent } from './api-virtualkeyboard.component';

describe('ApiVirtualkeyboardComponent', () => {
  let component: ApiVirtualkeyboardComponent;
  let fixture: ComponentFixture<ApiVirtualkeyboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiVirtualkeyboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiVirtualkeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiUserAgentClientHintsComponent } from './api-user-agent-client-hints.component';

describe('ApiUserAgentClientHintsComponent', () => {
  let component: ApiUserAgentClientHintsComponent;
  let fixture: ComponentFixture<ApiUserAgentClientHintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiUserAgentClientHintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiUserAgentClientHintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

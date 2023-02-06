import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiWebPeriodicBackgroundSyncComponent } from './api-web-periodic-background-sync.component';

describe('ApiWebPeriodicBackgroundSyncComponent', () => {
  let component: ApiWebPeriodicBackgroundSyncComponent;
  let fixture: ComponentFixture<ApiWebPeriodicBackgroundSyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiWebPeriodicBackgroundSyncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiWebPeriodicBackgroundSyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

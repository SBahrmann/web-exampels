import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtMediaNewComponent } from './at-media-new.component';

describe('AtMediaNewComponent', () => {
  let component: AtMediaNewComponent;
  let fixture: ComponentFixture<AtMediaNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtMediaNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtMediaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineAndBlockComponent } from './inline-and-block.component';

describe('InlineAndBlockComponent', () => {
  let component: InlineAndBlockComponent;
  let fixture: ComponentFixture<InlineAndBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineAndBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineAndBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

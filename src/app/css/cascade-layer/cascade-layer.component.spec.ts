import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CascadeLayerComponent } from './cascade-layer.component';

describe('CascadeLayerComponent', () => {
  let component: CascadeLayerComponent;
  let fixture: ComponentFixture<CascadeLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CascadeLayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CascadeLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

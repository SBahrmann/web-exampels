import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectmenuComponent } from './selectmenu.component';

describe('SelectmenuComponent', () => {
  let component: SelectmenuComponent;
  let fixture: ComponentFixture<SelectmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

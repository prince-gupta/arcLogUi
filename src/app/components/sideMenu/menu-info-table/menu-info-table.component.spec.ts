import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInfoTableComponent } from './menu-info-table.component';

describe('MenuInfoTableComponent', () => {
  let component: MenuInfoTableComponent;
  let fixture: ComponentFixture<MenuInfoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuInfoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuInfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

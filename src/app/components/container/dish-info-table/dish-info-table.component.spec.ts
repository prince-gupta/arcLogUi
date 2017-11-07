import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishInfoTableComponent } from './dish-info-table.component';

describe('DishInfoTableComponent', () => {
  let component: DishInfoTableComponent;
  let fixture: ComponentFixture<DishInfoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishInfoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishInfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishInfoAccordianComponent } from './dish-info-accordian.component';

describe('DishInfoAccordianComponent', () => {
  let component: DishInfoAccordianComponent;
  let fixture: ComponentFixture<DishInfoAccordianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishInfoAccordianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishInfoAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

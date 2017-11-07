import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSectionHeadingComponent } from './menu-section-heading.component';

describe('MenuSectionHeadingComponent', () => {
  let component: MenuSectionHeadingComponent;
  let fixture: ComponentFixture<MenuSectionHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSectionHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSectionHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

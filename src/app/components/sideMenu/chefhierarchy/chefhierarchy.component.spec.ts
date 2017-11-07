import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefhierarchyComponent } from './chefhierarchy.component';

describe('ChefhierarchyComponent', () => {
  let component: ChefhierarchyComponent;
  let fixture: ComponentFixture<ChefhierarchyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefhierarchyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefhierarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

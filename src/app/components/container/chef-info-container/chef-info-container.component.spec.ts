import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefInfoContainerComponent } from './chef-info-container.component';

describe('ChefInfoContainerComponent', () => {
  let component: ChefInfoContainerComponent;
  let fixture: ComponentFixture<ChefInfoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefInfoContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefInfoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

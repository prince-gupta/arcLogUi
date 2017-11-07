import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavheaderComponent } from './sidenavheader.component';

describe('SidenavheaderComponent', () => {
  let component: SidenavheaderComponent;
  let fixture: ComponentFixture<SidenavheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

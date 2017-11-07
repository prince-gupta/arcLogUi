import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemInfoCardComponent } from './system-info-card.component';

describe('SystemInfoCardComponent', () => {
  let component: SystemInfoCardComponent;
  let fixture: ComponentFixture<SystemInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemInfoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

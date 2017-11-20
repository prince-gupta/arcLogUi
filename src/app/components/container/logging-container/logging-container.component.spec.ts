import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggingContainerComponent } from './logging-container.component';

describe('LoggingContainerComponent', () => {
  let component: LoggingContainerComponent;
  let fixture: ComponentFixture<LoggingContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggingContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

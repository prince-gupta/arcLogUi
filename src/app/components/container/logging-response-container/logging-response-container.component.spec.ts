import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggingResponseContainerComponent } from './logging-response-container.component';

describe('LoggingResponseContainerComponent', () => {
  let component: LoggingResponseContainerComponent;
  let fixture: ComponentFixture<LoggingResponseContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggingResponseContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggingResponseContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

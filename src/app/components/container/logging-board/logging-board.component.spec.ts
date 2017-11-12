import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggingBoardComponent } from './logging-board.component';

describe('LoggingBoardComponent', () => {
  let component: LoggingBoardComponent;
  let fixture: ComponentFixture<LoggingBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggingBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggingBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

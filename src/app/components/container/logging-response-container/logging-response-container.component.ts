import { Component, OnInit, Input } from '@angular/core';
import { QueryResponse } from '../../shared/index'
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'logging-response-container',
  templateUrl: './logging-response-container.component.html',
  styleUrls: ['./logging-response-container.component.css']
})
export class LoggingResponseContainerComponent implements OnInit {

  @Input() response: QueryResponse[];

  constructor() { }
  ngOnInit() {
  }
}
import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-logging-board',
  templateUrl: './logging-board.component.html',
  styleUrls: ['./logging-board.component.css']
})
export class LoggingBoardComponent implements OnInit {

  constructor() { }


  ngOnInit() {
    
  }
}
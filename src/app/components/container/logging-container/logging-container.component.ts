import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { LoggingService } from '../../../services/index'
import { QueryResponse } from '../../shared/index' 

@Component({
  selector: 'logging-container',
  templateUrl: './logging-container.component.html',
  styleUrls: ['./logging-container.component.css']
})
export class LoggingContainerComponent implements OnInit {

  constructor(private loggingService: LoggingService) { 
    this.response = [];
  }

  response:QueryResponse[];

  @Input() dishId:string

  @Output() isProcessing : EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit() {
    this.response = [];
  }
  query(queryString:string){
    this.isProcessing.emit(true);
    this.loggingService.query(queryString, this.dishId).subscribe(
      response => {
        this.response = response;
        this.isProcessing.emit(false);
      }
    );
  }
}

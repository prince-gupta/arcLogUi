import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../../../services/index'
import { QueryResponse } from '../../shared/index'
import { StorageService } from '../../../services/index'
import { Message } from 'primeng/components/common/api';

@Component({
  selector: 'logging-container',
  templateUrl: './logging-container.component.html',
  styleUrls: ['./logging-container.component.css']
})
export class LoggingContainerComponent implements OnInit {

  constructor(private loggingService: LoggingService, private storageService: StorageService) {
    this.response = [];
  }

  response: QueryResponse[];
  msgs: Message[] = [];
  
  @Input() dishId: string

  @Output() isProcessing: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit() {
    this.response = [];
    if (+this.storageService.get('liveDishs') === 0) {
      this.showError();
    }
  }
  query(queryString: string) {
    if (+this.storageService.get('liveDishs') !== 0) {
      this.isProcessing.emit(true);
      this.loggingService.query(queryString, this.dishId).subscribe(
        response => {
          this.response = response;
          this.isProcessing.emit(false);
        }
      );
    }
    else{
      this.showError();
    }
  }

  showError() {
    this.msgs = [];
    this.msgs.push({ severity: 'warn', summary: 'No Dish Available', detail: 'It seems no dish is UP & RUNNING. Try after sometime.' });
  }

}

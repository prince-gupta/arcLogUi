import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-logging-board',
  templateUrl: './logging-board.component.html',
  styleUrls: ['./logging-board.component.css']
})
export class LoggingBoardComponent implements OnInit {

  processing:boolean = false;
  ngOnInit(){

  }

  notify(isProcessing:boolean){
    this.processing = isProcessing;
  }
}
import { Component, OnInit, Input } from '@angular/core';
import { SystemInfo } from '../../shared/index'
import * as _ from 'lodash'

@Component({
  selector: 'system-info-card',
  templateUrl: './system-info-card.component.html',
  styleUrls: ['./system-info-card.component.css']
})
export class SystemInfoCardComponent implements OnInit {

  constructor() { }

  @Input() info:SystemInfo
  
  ngOnInit() {
  }

  trim(str:string){
    if( str !== undefined && str !== null && str.length > 7){
      return str.substring(0,6) + '...'
    }
    return str;
  }
}
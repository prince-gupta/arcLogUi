import { Component, OnInit, Input } from '@angular/core';
import { SystemInfo } from '../../shared/index'

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
}
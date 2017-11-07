import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'system-info-card',
  templateUrl: './system-info-card.component.html',
  styleUrls: ['./system-info-card.component.css']
})
export class SystemInfoCardComponent implements OnInit {

  constructor() { }

  @Input() header:string
  @Input() value:string
  @Input() unit:string
  @Input() icon:string
  ngOnInit() {
    
  }

}

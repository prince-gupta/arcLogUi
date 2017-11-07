import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'menu-section-heading',
  templateUrl: './menu-section-heading.component.html',
  styleUrls: ['./menu-section-heading.component.css']
})
export class MenuSectionHeadingComponent implements OnInit {
  
  constructor() { }
  @Input() heading:string
  
  ngOnInit() {
  }

}

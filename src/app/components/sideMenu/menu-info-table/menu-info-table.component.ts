import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-info-table',
  templateUrl: './menu-info-table.component.html',
  styleUrls: ['./menu-info-table.component.css']
})
export class MenuInfoTableComponent implements OnInit {

  constructor() { }
  heading:String = "INFO TABLE"
  hideSection: Boolean = false;
  caretClass:String = "fa-caret-down";
  ngOnInit() {
  }

  toggleSection(){
    this.hideSection = !this.hideSection;
    if(this.hideSection === true){
      this.caretClass = "fa-caret-right";
    }
    else{
      this.caretClass = "fa-caret-down";
    }
  }

}

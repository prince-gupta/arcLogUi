import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'action-menu',
  templateUrl: './action-menu.component.html',
  styleUrls: ['./action-menu.component.css']
})
export class ActionMenuComponent implements OnInit {

  constructor() { }
  heading:string ="ACTIONS"
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

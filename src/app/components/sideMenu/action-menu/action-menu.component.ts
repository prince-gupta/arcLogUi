import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'action-menu',
  templateUrl: './action-menu.component.html',
  styleUrls: ['./action-menu.component.css']
})
export class ActionMenuComponent implements OnInit {

  constructor() { }
  heading:string ="ACTIONS"
  ngOnInit() {
  }

}

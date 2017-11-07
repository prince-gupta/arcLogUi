import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dish-info-table',
  templateUrl: './dish-info-table.component.html',
  styleUrls: ['./dish-info-table.component.css']
})

export class DishInfoTableComponent implements OnInit {
  dish:Dish;
  dish2:Dish;
  constructor() { }
  ngOnInit() {
    this.dish ={
      'name':'Dish',
      'id':'123-D',
      'host':'127.0.0.1',
      'running':true
    }

    this.dish2 ={
      'name':'Dish2',
      'id':'123-D-2',
      'host':'127.0.2.1',
      'running':false
    }
  }
}

export interface Dish{
  name:string
  id:string
  host:string
  running:boolean
}

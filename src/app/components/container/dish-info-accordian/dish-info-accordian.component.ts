import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../dish-info-table/dish-info-table.component'

@Component({
  selector: 'dish-info-accordian',
  templateUrl: './dish-info-accordian.component.html',
  styleUrls: ['./dish-info-accordian.component.css']
})
export class DishInfoAccordianComponent implements OnInit {

  @Input() dish:Dish

  constructor() { }

  ngOnInit() {
  }

  getAccordianClass(){
    const isDishUp = this.dish.running;
    return {dish_accordian_up: isDishUp, dish_accordian_down:!isDishUp};
  }

}

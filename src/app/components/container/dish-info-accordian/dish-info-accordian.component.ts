import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dish-info-accordian',
  templateUrl: './dish-info-accordian.component.html',
  styleUrls: ['./dish-info-accordian.component.css']
})
export class DishInfoAccordianComponent implements OnInit {

  @Input() dish:Dish

  dish_accordian_class:string
  dish_status_class:string

  constructor() { }

  ngOnInit() {
    if( this.dish.running ){
      this.dish_accordian_class = "dish_accordian_up";
      this.dish_status_class="dish_up fa fa-dot-circle-o";
    }
    else{
      this.dish_accordian_class = "dish_accordian_down";
      this.dish_status_class="dish_down fa fa-dot-circle-o";
    }
  }

}

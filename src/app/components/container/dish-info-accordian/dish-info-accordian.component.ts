import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../../shared/dish.model'
import { DishService } from '../../../services/dish-service'
import * as _ from 'lodash';

@Component({
  selector: 'dish-info-accordian',
  templateUrl: './dish-info-accordian.component.html',
  styleUrls: ['./dish-info-accordian.component.css']
})
export class DishInfoAccordianComponent implements OnInit {

  @Input() dish:Dish
  isProcessing:boolean = false;

  constructor(private dishService : DishService) { }

  ngOnInit() {
  }

  getAccordianClass(){
    const isDishUp = _.get(this.dish,'running',false);
    return {dish_accordian_up: isDishUp, dish_accordian_down:!isDishUp};
  }

  shutdown(){
    this.isProcessing = true;
    this.dishService.shutdown(this.dish.id)
    .subscribe(
      response => {
        this.isProcessing = false;
      }
    );
  }

  reIndex(){
    this.isProcessing = true;
    this.dishService.reIndex(this.dish.id).subscribe(
      response => {
        this.isProcessing = false;
        console.log(response);
      },
      err => {
        console.log(err);
      }
    );
  }

}

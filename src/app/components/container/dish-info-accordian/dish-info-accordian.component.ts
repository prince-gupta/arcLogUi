import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dish } from '../../shared/dish.model'
import { DishService } from '../../../services/dish-service'
import { MatSnackBar } from '@angular/material'

import * as _ from 'lodash';

@Component({
  selector: 'dish-info-accordian',
  templateUrl: './dish-info-accordian.component.html',
  styleUrls: ['./dish-info-accordian.component.css']
})
export class DishInfoAccordianComponent implements OnInit {

  @Input() dish: Dish
  isProcessing: boolean = false;

  constructor(private dishService: DishService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  getAccordianClass() {
    const isDishUp = _.get(this.dish, 'running', false);
    return { dish_accordian_up: isDishUp, dish_accordian_down: !isDishUp };
  }

  shutdown() {
    this.isProcessing = true;
    this.dishService.shutdown(this.dish.id)
      .subscribe(
      response => {
        this.isProcessing = false;
      }
      );
  }

  reIndex() {
    this.isProcessing = true;
    this.dishService.reIndex(this.dish.id).subscribe(
      response => {
        this.isProcessing = false;
        this.reIndexingAction(this.dish.id);
      },
      err => {
        console.log(err);
      }
    );
  }

  reIndexingAction(dishId: string) {
    this.snackBar.open(dishId + " has been re-indexed.", "Close", {
      duration: 3000
    });
  }
}

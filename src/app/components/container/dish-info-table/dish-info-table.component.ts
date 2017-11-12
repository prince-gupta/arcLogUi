import { Component, OnInit } from '@angular/core';
import { DishService } from '../../../services/dish-service'
import { Dish } from '../../shared/dish.model'

@Component({
  selector: 'dish-info-table',
  templateUrl: './dish-info-table.component.html',
  styleUrls: ['./dish-info-table.component.css']
})

export class DishInfoTableComponent implements OnInit {
  dishes:Dish[];
  
  constructor(private dishService : DishService) { }
  ngOnInit() {
    this.dishService.getDishes().subscribe(
      dishs => 
        this.dishes = dishs   
    )
  }
}
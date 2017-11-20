import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { DishService } from '../../../services/dish-service'
import { Dish } from '../../shared/dish.model'
import { Observable } from 'rxjs/Rx'

@Component({
  selector: 'dish-info-table',
  templateUrl: './dish-info-table.component.html',
  styleUrls: ['./dish-info-table.component.css']
})

export class DishInfoTableComponent implements OnInit, OnDestroy {
  dishes: Dish[];

  @Output() isProcessing: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(private dishService: DishService) { }
  subs;
  ngOnInit() {
    this.isProcessing.emit(true);
    this.populateDishs();
    this.subs = Observable.interval(10000).subscribe(x => {
      this.populateDishs();
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  populateDishs() {
    this.dishService.getDishes().subscribe(
      dishs =>{
        this.dishes = dishs;
        this.isProcessing.emit(false);
      }
    )
  }
}
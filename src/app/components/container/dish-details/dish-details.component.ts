import { Component, OnInit, Input } from '@angular/core';
import { SystemInfo } from '../../shared/index'
import { Dish } from '../../shared/dish.model'
import { DishService } from '../../../services/dish-service'
import { ActivatedRoute, Params } from '@angular/router'
import { Message } from 'primeng/primeng';


@Component({
  selector: 'dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit {

  constructor(private dishService: DishService, private route: ActivatedRoute) { }

  @Input() dish: Dish;

  snackMessage: Message[] = [];

  info: SystemInfo = {
    header: "RAM",
    value: "1.5",
    unit: "GB",
    catogery: "Disk Usage",
    icon: "fa fa-hdd-o"
  }

  ngOnInit() {
    this.snackMessage = [];
    this.route.params.subscribe((params: Params) => {
      this.dishService.getDishById(this.route.snapshot.params["id"]).subscribe(
        (dish) => {
          this.dish = dish;
          if (!this.dish.running) {
            this.snackMessage.push({ severity: 'warn', summary: this.dish.name, detail: 'It seems this Dish is not up and running.' });
          }
        }
      );
    });
  }

}

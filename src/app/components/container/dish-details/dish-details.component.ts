import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { SystemInfo } from '../../shared/index'
import { Dish } from '../../shared/dish.model'
import { DishService } from '../../../services/dish-service'
import { ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router'
import { Message } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable'


@Component({
  selector: 'dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit, OnDestroy {

  id: string;
  subs;

  constructor(private dishService: DishService, private activatedRoute: ActivatedRoute, private router: Router
  ) {

  }

  @Input() dish: Dish;
  processing:boolean = false;

  snackMessage: Message[] = [];

  info: SystemInfo = {
    header: "RAM",
    value: "1.5",
    unit: "GB",
    catogery: "Disk Usage",
    icon: "fa fa-hdd-o"
  }

  ngOnInit() {
    this.router.events.
    filter(e => (e instanceof NavigationEnd)).
    subscribe(val => {
      this.snackMessage = [];
      this.id = this.activatedRoute.snapshot.params["id"];
      this.fetchData(this.id);
      this.subs = Observable.interval(10000).subscribe(x => {
        this.fetchData(this.id);
      });
     

    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }


  fetchData(id: string) {
    this.dishService.getDishById(id).subscribe(
      (dish) => {
        this.dish = dish;
        if (!this.dish.running) {
          this.snackMessage = [];
          this.snackMessage.push({ severity: 'warn', summary: this.dish.name, detail: 'It seems this Dish is not up and running.' });
        }
      }
    );

  }

  notify(isProcessing:boolean){
    this.processing = isProcessing;
  }
}

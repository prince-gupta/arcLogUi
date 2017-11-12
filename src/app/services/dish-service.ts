import { Injectable, OnInit } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Subject } from 'rxjs/Rx'
import { Dish } from '../components/shared/index'

@Injectable()
export class DishService implements OnInit {

  constructor(private httpClient: HttpClient) {

  }
  DISHES : Dish[];
  
  ngOnInit() {
    
  }

  getDishes() {
   return this.httpClient.get<Dish[]>('http://localhost:8089/dishs')
   .map(response => response);  
  }

  getDishById(id: string) {
     //return DISHES_LOCAL.find(dish => dish.id === id);
     return this.httpClient.get<Dish>('http://localhost:8089/dish/'+id)
     .map(response => response);
  }
}

const DISHES_LOCAL = [
  {
    'name': 'Dish - 1 ',
    'id': '1-D',
    'host': '127.0.0.1',
    'dataPath': '/var/tmp/data',
    'running': true
  },
  {
    'name': 'Dish - 2',
    'id': '2-D',
    'host': '127.0.0.2',
    'dataPath': '/var/tmp/data',
    'running': true
  },
  {
    'name': 'Dish - 3',
    'id': '3-D',
    'host': '127.0.0.3',
    'dataPath': '/var/tmp/data',
    'running': false
  },
  {
    'name': 'Dish - 4',
    'id': '4-D',
    'host': '127.0.0.4',
    'dataPath': '/var/tmp/data',
    'running': true
  },
  {
    'name': 'Dish - 5',
    'id': '5-D',
    'host': '127.0.0.5',
    'dataPath': '/var/tmp/data',
    'running': false
  },
  {
    'name': 'Dish - 6',
    'id': '6-D',
    'host': '127.0.0.6',
    'dataPath': '/var/tmp/data',
    'running': true
  },
  {
    'name': 'Dish - 7',
    'id': '7-D',
    'host': '127.0.0.7',
    'dataPath': '/var/tmp/data',
    'running': true
  }, {
    'name': 'Dish - 8',
    'id': '8-D',
    'host': '127.0.0.8',
    'dataPath': '/var/tmp/data',
    'running': false
  }, {
    'name': 'Dish - 9',
    'id': '9-D',
    'host': '127.0.0.9',
    'dataPath': '/var/tmp/data',
    'running': false
  }
];
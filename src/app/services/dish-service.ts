import { Injectable, OnInit } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Subject, Observable } from 'rxjs/Rx'
import { Dish } from '../components/shared/index'
import { StorageService } from './storage-service'
import { Configuration } from './service-configuration'
import * as _ from 'lodash';

@Injectable()
export class DishService implements OnInit {

  constructor(private httpClient: HttpClient, private storageService: StorageService, private configuration: Configuration) {

  }
  DISHES: Dish[];

  ngOnInit() {

  }

  getDishes() {
    let dishs = this.httpClient.get<Dish[]>(this.configuration.getFullUrl('dishResource/dishsInfo'))
      .map(response => _.get(response, 'result.dishsInfo'));
    this.storageService.save("dishs", dishs);
    return dishs;
  }



  getDishById(id: string) {
    //return DISHES_LOCAL.find(dish => dish.id === id);
    return this.get('dish', id);
  }

  shutdown(id: string) {
    return this.get('stop', id);
  }

  reIndex(id: string) {
    return this.get('reIndex', id);
  }

  private get(url: string, id: string) {
    return this.httpClient.get<string>(this.configuration.getFullUrl('dishResource/' + url + '/' + id))
      .map(response => _.get(response, 'result.' + url + '' + id));
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
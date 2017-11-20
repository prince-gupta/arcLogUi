import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ChefService } from '../services/chef-service';
import { StorageService } from '../services/storage-service';
import { Parent, Child, SystemInfo, Dish, ChefInfo } from '../components/shared/index';
import * as _ from 'lodash';


@Injectable()
export class ChefHierarchyService {

  constructor(private storageService: StorageService, private chefService: ChefService) {
  }
  getHierarchyTree(callback: any) {
    Observable.of(this.chefService.getChefInfo().subscribe(
      chefInfo => {
        let dishs: Dish[] = JSON.parse(this.storageService.get("dishs"));
        let parent: Parent = new Parent();
        parent.setLabel(chefInfo.chef.name + " ( " + chefInfo.chef.id + " ) - " + chefInfo.chef.host);

        for (var index = 0; index < dishs.length; index++) {
          let child: Child = new Child();
          let dish: Dish = dishs[index];
          child.setId(_.get(dish, "id", "NA") + "");
          child.setLabel(_.get(dish, "name", "NA") + " ( " + _.get(dish, "id", "NA") + " ) - " + _.get(dish, "host", "NA"));
          if (dish !== undefined)
            child.setRunning(dish.running);
          else
            child.setRunning(false);
          parent.addChild(child);
        }
        let parentString = JSON.stringify(parent);
        callback('[' + parentString + ']');
      }));
  }
}

//For refrence
const TREE_JSON = [
  {
    'label': 'Chef (C-123) - 127.0.0.1',
    'collapsedIcon': 'fa-mortar-board',
    'expandedIcon': 'fa-mortar-board',
    'expanded': true,
    'type': 'parent',
    'children': [
      {
        'label': 'Dish (D-1) - 127.0.0.1',
        'id': '1-D',
        'running': true
      },
      {
        'label': 'Dish (D-2) - 127.0.0.1',
        'id': '2-D',
        'running': true
      },
      {
        'label': 'Dish (D-3) - 127.0.0.1',

        'id': '3-D',
        'running': false
      },
      {
        'label': 'Dish (D-4) - 127.0.0.1',

        'id': '4-D',
        'running': true
      },
      {
        'label': 'Dish (D-5) - 127.0.0.1',

        'id': '5-D',
        'running': false
      },
      {
        'label': 'Dish (D-6) - 127.0.0.1',

        'id': '6-D',
        'running': true

      },
      {
        'label': 'Dish (D-7) - 127.0.0.1',

        'id': '7-D',
        'running': true
      },
      {
        'label': 'Dish (D-8) - 127.0.0.1',

        'id': '8-D',
        'running': false
      }
    ]
  }
]
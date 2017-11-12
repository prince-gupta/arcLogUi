import { Injectable } from '@angular/core';

@Injectable()
export class ChefHierarchyService{
    getHierarchyTree(){
      return TREE_JSON;
    }
}
const TREE_JSON = [
    {
        'label': 'Chef (C-123) - 127.0.0.1',
        'collapsedIcon': 'fa-mortar-board',
        'expandedIcon': 'fa-mortar-board',
        'expanded':true,
        'type':'parent',
        'children': [
          {
            'label': 'Dish (D-1) - 127.0.0.1',
            'id':'1-D',
            'running':true
          },
          {
            'label': 'Dish (D-2) - 127.0.0.1',
            'id':'2-D',
            'running':true
          },
          {
            'label': 'Dish (D-3) - 127.0.0.1',
            
            'id':'3-D',
            'running':false
          },
          {
            'label': 'Dish (D-4) - 127.0.0.1',
            
            'id':'4-D',
            'running':true
          },
          {
            'label': 'Dish (D-5) - 127.0.0.1',
            
            'id':'5-D',
            'running':false
          },
          {
            'label': 'Dish (D-6) - 127.0.0.1',
            
            'id':'6-D',
            'running':true

          },
          {
            'label': 'Dish (D-7) - 127.0.0.1',
            
            'id':'7-D',
            'running':true
          },
          {
            'label': 'Dish (D-8) - 127.0.0.1',
            
            'id':'8-D',
            'running':false
          }
        ]
      }
]
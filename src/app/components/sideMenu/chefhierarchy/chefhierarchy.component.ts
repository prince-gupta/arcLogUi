import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/primeng';

@Component({
  selector: 'chefhierarchy',
  templateUrl: './chefhierarchy.component.html',
  styleUrls: ['./chefhierarchy.component.css']
})
export class ChefhierarchyComponent implements OnInit {

  constructor() { }
  title: string = "Chef Heirarchy"

files: any;
heading: string;

  ngOnInit() {
    this.heading = "CHEF HIERARCHY";
    this.files = [
      {
        'label': 'Chef (C-123) - 127.0.0.1',
        'collapsedIcon': 'fa-mortar-board',
        'expandedIcon': 'fa-mortar-board',
        'children': [
          {
            'label': 'Dish (D-123) - 127.0.0.1',
            'icon': 'fa-cutlery'
          }
        ]
      }
    ];
  }

}

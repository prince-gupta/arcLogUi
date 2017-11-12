import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/primeng';
import { ChefHierarchyService } from '../../../services/chef-hierarchy-service'
import { Router } from '@angular/router';

@Component({
  selector: 'chefhierarchy',
  templateUrl: './chefhierarchy.component.html',
  styleUrls: ['./chefhierarchy.component.css']
})
export class ChefhierarchyComponent implements OnInit {

  constructor(private hierarchyService : ChefHierarchyService, private router : Router) { }
  title: string = "Chef Heirarchy"

files: any;
heading: string;

  ngOnInit() {
    this.heading = "CHEF HIERARCHY";
    this.files = this.hierarchyService.getHierarchyTree();
  }

}

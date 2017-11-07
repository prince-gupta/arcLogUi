import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chef-info-container',
  templateUrl: './chef-info-container.component.html',
  styleUrls: ['./chef-info-container.component.css']
})
export class ChefInfoContainerComponent implements OnInit {

  constructor() { }

  metricsValue: string = "258"
  metricsUnit:string ="MB"
  


  ngOnInit() {
  }

}

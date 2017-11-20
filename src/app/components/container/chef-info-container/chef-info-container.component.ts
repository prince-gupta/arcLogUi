import { Component, OnInit } from '@angular/core';
import { SystemInfo } from '../../shared/index';
import { ChefService } from '../../../services/chef-service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'chef-info-container',
  templateUrl: './chef-info-container.component.html',
  styleUrls: ['./chef-info-container.component.css']
})
export class ChefInfoContainerComponent implements OnInit {

  constructor(private chefService: ChefService) { }

  hddInfo: SystemInfo = {
    header: "HDD",
    value: "348/500",
    unit: "GB",
    catogery: "Space Usage",
    icon: "fa fa-hdd-o"
  }

  ramInfo: SystemInfo = {
    header: "RAM",
    value: "10.4/16",
    unit: "GB",
    catogery: "RAM Usage",
    icon: "fa fa-tasks"
  }

  cpuInfo: SystemInfo = {
    header: "CPU",
    value: "63",
    unit: "%",
    catogery: "CPU Usage",
    icon: "fa fa-microchip"
  }

  osInfo: Observable<SystemInfo>;



  ngOnInit() {
    this.chefService.getChefMetaInfo().subscribe(
      metrics => {
        this.osInfo = metrics[0]
      }
    )

    
  }

}

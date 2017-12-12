import { Component, OnInit } from '@angular/core';
import { SystemInfo } from '../../shared/index';
import { ChefService } from '../../../services/chef-service';
import { Observable } from 'rxjs/Observable';
import { MatSnackBar } from '@angular/material'
import { Message } from 'primeng/primeng';

@Component({
  selector: 'chef-info-container',
  templateUrl: './chef-info-container.component.html',
  styleUrls: ['./chef-info-container.component.css']
})
export class ChefInfoContainerComponent implements OnInit {

  constructor(private chefService: ChefService, private snackBar: MatSnackBar) { }

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

  snackMessage: Message[] = [];



  ngOnInit() {
    this.chefService.getChefMetaInfo().subscribe(
      metrics => {
        this.snackMessage = [];
        this.osInfo = metrics[0]
      },
      error => {
        this.snackMessage = [];
        this.snackMessage.push({ severity: 'error', summary: 'Chef is not UP', detail: 'It seems Chef is not UP & RUNNING. Try after sometime ! If Problem persists, contact Admin.' });
      }
    );
  }
}

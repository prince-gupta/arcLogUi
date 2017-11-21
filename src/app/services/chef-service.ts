import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Subject } from 'rxjs/Rx'
import { SystemInfo, ChefInfo } from '../components/shared/index'
import { Observable } from 'rxjs/Observable';
import { StorageService } from './storage-service';

import { Configuration } from './service-configuration'

@Injectable()
export class ChefService
{
    constructor(private httpClient : HttpClient, 
        private storageService : StorageService, 
        private configuration : Configuration){
    }
    
    getChefMetaInfo(){
        let metrics = this.httpClient.get<SystemInfo>(this.configuration.getFullUrl("info/metrics/"))
                        .map(metrics => metrics);
        this.storageService.save("chefMetrics", metrics);
        return (metrics);
    }

    getChefInfo(){
        let info = this.httpClient.get<ChefInfo>(this.configuration.getFullUrl("info"))
        .map(info => info);

        this.storageService.save("chefInfo", info);
        return info;
    }
}
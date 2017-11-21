import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Subject } from 'rxjs/Rx'
import { SystemInfo, ChefInfo } from '../components/shared/index'
import { Observable } from 'rxjs/Observable';
import { StorageService } from './storage-service';

@Injectable()
export class ChefService
{
    constructor(private httpClient : HttpClient, private storageService : StorageService){
    }
    
    getChefMetaInfo(){
        let metrics = this.httpClient.get<SystemInfo>("https://arc-chef.herokuapp.com/info/metrics/")
                        .map(metrics => metrics);
        this.storageService.save("chefMetrics", metrics);
        return (metrics);
    }

    getChefInfo(){
        let info = this.httpClient.get<ChefInfo>("https://arc-chef.herokuapp.com/info")
        .map(info => info);

        this.storageService.save("chefInfo", info);
        return info;
    }
}
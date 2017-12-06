import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { QueryResponse } from '../components/shared/index'
import { Configuration } from './service-configuration'
import * as _ from 'lodash'
@Injectable()
export class LoggingService {

    constructor(private httpClient: HttpClient, private configuration: Configuration) { }

    query(queryString: string, dishId?:string) {
        let url:string = this.configuration.getFullUrl('dishResource/query');
       return this.httpClient.post<QueryResponse[]>(url, {
            queryString: queryString,
            dishId: dishId
        }).map(response => _.get(response,'result.query'));
    }
}
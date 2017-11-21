import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { QueryResponse } from '../components/shared/index'

@Injectable()
export class LoggingService {

    constructor(private httpClient: HttpClient) { }

    query(queryString: string, dishId?:string) {
        let url:string = 'https://arc-chef.herokuapp.com/dishResource/query';
       return this.httpClient.post<QueryResponse[]>(url, {
            queryString: queryString,
            dishId: dishId
        }).map(response => response);
    }
}
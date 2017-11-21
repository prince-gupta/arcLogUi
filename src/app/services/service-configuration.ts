import { Injectable } from '@angular/core'

@Injectable()
export class Configuration{

    chefUrl:string = 'https://arc-chef.herokuapp.com/'

    public getChefBaseUrl(){
        return this.chefUrl;
    }

    public getFullUrl(urlToAppend:string){
        return this.chefUrl+urlToAppend;
    }
}
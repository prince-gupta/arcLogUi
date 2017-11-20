import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Dish } from '../components/shared/dish.model';

@Injectable()
export class StorageService {

  save(name : string,observable : Observable<any>){
    let data : string;
    observable.subscribe(
      dataObj => {
        data = JSON.stringify(dataObj) ;
        localStorage.setItem(name,data);
      }
    )
  	
  }

  get(name:string){
	let data = localStorage.getItem(name);
  	return data ;
  }
}
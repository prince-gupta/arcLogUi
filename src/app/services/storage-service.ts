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
        this.populateNoOfLiveDishs();
      }
    )
  	
  }

  saveAny(name : string, value : any){
    localStorage.setItem(name, value);
  }

  get(name:string){
	let data = localStorage.getItem(name);
  	return data ;
  }

  private populateNoOfLiveDishs() {
    let liveDishs = JSON.parse(this.get("dishs")).filter(dish => dish.running === true).length;
    this.saveAny('liveDishs', liveDishs);
  }
}
import { Injectable } from '@angular/core';
import * as msdata from '../assets/ms-data.json';

@Injectable({
  providedIn: 'root'
})
export class MsDataService {

  massShooting  = msdata;
  

  constructor() { }

  get(){
    return  this.massShooting;
  }

  add(dataItem){
    this.massShooting.push(dataItem);

  }
  delete(dataItem){
    const index = this.massShooting.indexOf(dataItem);
    if(index >= 0 ){
      this.massShooting.splice(index, 1);

    }
  }
}

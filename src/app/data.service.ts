import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //inject HttpClient service object
  constructor(private hc:HttpClient) { }
   
  getcolorsdata():Observable<any>{
    //http get
    return this.hc.get<any>("https://reqres.in/api/unknown")
  }

  getusersdata():Observable<any>{
    //http get
    return this.hc.get<any>("https://jsonplaceholder.typicode.com/users")
  }
  
}

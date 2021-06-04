import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {


  constructor(private hc:HttpClient){ }

  getmobilesdata():Observable<Product[]>{
    return this.hc.get<Product[]>("http://localhost:3000/mobiles")
  }

}

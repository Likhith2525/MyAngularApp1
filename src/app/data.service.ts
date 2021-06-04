import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //inject HttpClient service object
  constructor(private hc:HttpClient) { }
 
  getposts():Observable<any>{
    //http get
    return this.hc.get<any>("https://jsonplaceholder.typicode.com/posts")
  }

  getPostById(id):Observable<any>{
    return this.hc.get("https://jsonplaceholder.typicode.com/posts/"+id)
  }



}

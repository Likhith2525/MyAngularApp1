import { Component, OnInit } from '@angular/core';
import { HindiService } from '../hindi.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-hindi',
  templateUrl: './hindi.component.html',
  styleUrls: ['./hindi.component.css']
})
export class HindiComponent implements OnInit{
 
  hindi:Product[]=[];


  //inject object of dataservice class
  //here dsObj isn't a parameter but an instance variable
  constructor(private hsObj:HindiService){
  }

   ngOnInit(){
     //object initialization logic
     this.hindi= this.hsObj.getHindiData();
   }  
}

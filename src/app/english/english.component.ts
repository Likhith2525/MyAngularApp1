import { Component, OnInit } from '@angular/core';
import { EnglishService } from '../english.service'; 
import { Product } from '../models/product.model';

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.css']
})
export class EnglishComponent implements OnInit {


  english:Product[]=[];

  //inject object of dataservice class
  //here dsObj isn't a parameter but an instance variable
  constructor(private esObj:EnglishService){
  }

   ngOnInit(){
     //object initialization logic
     this.english= this.esObj.getEnglishData();
   
    }  


}


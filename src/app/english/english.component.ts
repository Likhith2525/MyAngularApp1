import { Component, OnInit } from '@angular/core';
import { EnglishService } from '../english.service'; 
import { TestService} from "../test.service";
import { Product } from '../models/product.model';

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.css']
})
export class EnglishComponent implements OnInit {


  english:Product[]=[];
  num:any;//to receive data from home component

  //inject object of dataservice class
  //here dsObj isn't a parameter but an instance variable
  constructor(private esObj:EnglishService,private testObj:TestService){
  }

   ngOnInit(){
     //object initialization logic
     this.english= this.esObj.getEnglishData();
   
     this.num=this.testObj.getData();
    }  


}


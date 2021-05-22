import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { TeluguService } from '../telugu.service';

@Component({
  selector: 'app-telugu',
  templateUrl: './telugu.component.html',
  styleUrls: ['./telugu.component.css']
})
export class TeluguComponent implements OnInit{

  telugu:Product[]=[]
   
  constructor(private tsObj:TeluguService){}
   

  ngOnInit(){
    this.telugu=this.tsObj.getTeluguData();
  }

}

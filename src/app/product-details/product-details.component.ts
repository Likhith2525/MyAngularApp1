import { Component,Input,EventEmitter, Output} from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  {

  //to receive data from parent as input
  @Input() productObj:Product; //add input decorator ...import from @angular/core first


   //create a custom event
   @Output() myEvent=new EventEmitter()   //from @angular/core only
   
   sendProductDetailsToParent(productTitle){

    this.myEvent.emit(productTitle);

   }
}

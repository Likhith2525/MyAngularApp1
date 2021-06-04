import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { TestService } from '../test.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent {

  mobiles:Product[]=[];

  //inject obj of DataService clas
   constructor(private tsObj:TestService) { }

   //obj initialization logic
    ngOnInit() {
     this.tsObj.getmobilesdata().subscribe(
     data=>{
       this.mobiles=data;
     },
     err=>{
       console.log("error is",err)
     }
     )
   }

}

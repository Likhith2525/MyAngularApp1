import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent {

  // mobiles:Product[]=[];

  // //inject obj of DataService clas
  // constructor(private dsObj:DataService) { }

  // //obj initialization logic
  // ngOnInit() {
  // this.dsObj.getmobilesdata().subscribe(
  //   data=>{
  //     this.mobiles=data;
  //   },
  //   err=>{
  //     console.log("error is",err)
  //   }
  //   )
  // }

}

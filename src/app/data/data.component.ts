import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  colorsdata:any;
  jsonusersdata:any;
  reqresusersdata:any;


  //inject obj of DataService class
  constructor(private dsObj:DataService) { }

  //obj initialization logic
  ngOnInit() {
  this.dsObj.getcolorsdata().subscribe(
    data=>{
      //assign colors data
      this.colorsdata=data;
    },
    err=>{
      console.log("colors data error is",err)
    }
    )

    this.dsObj.getjsonusersdata().subscribe(
      data=>{
        //assign users data
        this.jsonusersdata=data;
      },
      err=>{
        console.log("users data error is",err)
      }
      )


      this.dsObj.getreqresusersdata().subscribe(
        data=>{
          //assign users data
          this.reqresusersdata=data;
        },
        err=>{
          console.log("users data error is",err)
        }
        )
  }

}

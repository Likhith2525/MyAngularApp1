import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit,OnDestroy {

  mySubscription:Subscription;
  users:any;


  //inject obj of DataService class
  constructor(private dsObj:DataService,private router:Router) { }

  //obj initialization logic
  ngOnInit() {
 

    this.mySubscription=this.dsObj.getposts().subscribe(
        data=>{
          //assign users data
          this.users=data;
        },
        err=>{
          console.log("users data error is",err)
        }
        )
  }


  onSelectId(id){

    this.router.navigateByUrl('users/'+id)
  }


  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }
}

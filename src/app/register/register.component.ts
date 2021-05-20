import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit,OnDestroy{

  constructor() {
   }

   ngOnInit(){
    console.log("register-constructor is executed")

   }
   ngOnDestroy(){
     console.log("reg-component is destroyed")
   }

}

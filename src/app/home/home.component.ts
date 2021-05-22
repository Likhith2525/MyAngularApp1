import { Component, OnInit } from '@angular/core';
import { TestService} from "../test.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  n:string="English Songs";
  constructor(private testObj:TestService) { }

  ngOnInit(): void {
    this.testObj.setData(this.n);
  }

}

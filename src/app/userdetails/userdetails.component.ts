import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  postObj:Post;
  constructor(private ar:ActivatedRoute,private ds:DataService) { }

  ngOnInit(): void {
    //get id from url
    let id=this.ar.snapshot.params.id;

    //get data of posts with current id
     this.ds.getPostById(id).subscribe(
       obj=>{
         this.postObj=obj;
       },
       err=>{
         console.log("Error in reading posts",err)
       }
     )
  }

}

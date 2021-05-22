import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class TeluguService {

  constructor() { }

  private telugu:Product[]=[
    {
    productTitle:"Chitti",
    description:"Jathi Ratnalu",
    productImage:"https://c.saavncdn.com/289/Chitti-From-Jathi-Ratnalu--Telugu-2021-20210111121001-500x500.jpg"
    },
    {
    productTitle:"Tharagathi Gadhi",
    description:"Colour Photo",
    productImage:"https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1598527201/srch_adityamusic_INA092016931.jpg"
    },
    
    {
    productTitle:"Life Of Ram",
    description:"Jaanu",
    productImage:"https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1580565560/srch_adityamusic_INA092016787.jpg"
    },
    
    {
    productTitle:"Choosale Kallaraa",
    description:"SR Kalyanamandapam",
    productImage:"https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/music/8903245971109/1604560235/srch_hungama_57576689.jpg"
    },

    {
    productTitle:"Maguva Maguva",
    description:"Vakeel Saab",
    productImage:"https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1583654379/srch_adityamusic_INA092016838.jpg"
    },
      
    {
     productTitle:"Maate Vinadhuga",
     description:"Taxiwaala",
     productImage:"https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1540540188/srch_adityamusic_INA091816090.jpg"
    },
    {
     productTitle:"Undiporaadhey",
     description:"Hushaaru",
     productImage:"https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/Hushaaru.jpg"
     },
     {
     productTitle:"Chukkala Chunni",
     description:"SR Kalyanamandapam",
     productImage:"https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/CHUKKALA_CHUNNI%20.jpg"
     }
  ];


  getTeluguData():Product[]{
    return this.telugu;
  }
}

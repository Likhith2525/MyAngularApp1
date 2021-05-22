import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class HindiService {

  constructor() { }

  
  private hindi:Product[]=[

    {
    productTitle:"Phir Bhi Tumko Chaahunga",
    description:"Half Girlfriend",
    productImage:"https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1492518399/srch_zeemusic_ZMC00493-02.jpg"
    },
    {
    productTitle:"Samjhawan",
    description:"Samjhawan",
    productImage:"https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_sonymusic/music/update/1596110100181/srch_sonymusic_A10328E0006969869B.jpg"    
  },
    
    {
    productTitle:"Enna Sona",
    description:"OK Jaanu",
    productImage:"https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_sonymusic/music/srch_sonymusic_A10328E0008133719Q.jpg"    
  },
    
    {
    productTitle:"Pal",
    description:"Jalebi",
    productImage:"https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_sonymusic/music/srch_sonymusic_A10328E0008830029G.jpg"    
    },

    {
    productTitle:"Khairiyat",
    description:"Chhichhore",
    productImage:"https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/music/8902894360937/1616438122/srch_hungama_49136601.jpg"    
    },
      
    {
     productTitle:"Duniyaa",
     description:"Luka Chuppi",
     productImage:"https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/music/8902894360685/1618052718/srch_hungama_47309655.jpg"    
    },
    {
     productTitle:"Tera Ban Jaunga",
     description:"Kabir Singh",
     productImage:"https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1560508513/48273546.jpg"    
    },
     {
     productTitle:"Agar Tum Saath Ho",
     description:"Tamasha (2015)",
     productImage:"https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1444970739/16537841.jpg"    
    }
  ];

  getHindiData():Product[]{
    return this.hindi;
  }

}

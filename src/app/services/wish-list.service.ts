import { Injectable } from '@angular/core';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  wishList:Product[] = [];


  constructor() { }

  wishListProduct(product: Product) {
    this.wishList.push(product); 
    return this.wishList;    
  }

  clearWishList(): void {
    this.wishList = [];
    alert("WishList cleared!");
  }


}

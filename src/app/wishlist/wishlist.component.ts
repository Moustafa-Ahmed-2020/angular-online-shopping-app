import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Models/Product';
import { WishListService } from '../services/wish-list.service';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishListedItems: Product[] = [];
  constructor(private wish: WishListService) { 
 
    }

  ngOnInit(): void { 
    this.wishListedItems = this.wish.wishList;
  }

  clear():void {
    this.wish.clearWishList();
    this.wishListedItems = [];
  }
}

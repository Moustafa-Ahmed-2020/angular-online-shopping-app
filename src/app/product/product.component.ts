import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../Models/Product';
import { HttpService } from '../services/http.service';
import { WishListService } from '../services/wish-list.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() productItem: Product;

  @Output() wishListProduct: EventEmitter<Product> = new EventEmitter;

  constructor(private productHttpService:HttpService, private wish: WishListService, private productService:ProductService) {
    
    this.productItem = {
      id : 0,
      name : '',
      url : '',
      price : 0, 
      reviews : 0,
      wishlist : false,
      description: '',
      quantity: 1,  
    }     
  }

  ngOnInit(): void {
    this.productHttpService.getProducts()
  }

  wishList(product: Product): void {
    this.wish.wishListProduct(product);
    alert(product.name+" added to wishList!");
  }

  viewProduct(product: Product) {
    this.productService.viewProduct(product);
  }

  addToCart(product: Product) {     
    this.productService.addToCart(product);
    alert(product.name+" added to cart!");    
  }


}

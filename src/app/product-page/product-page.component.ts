import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../Models/Product';
import { ProductService } from '../services/product.service';
import { WishListService } from '../services/wish-list.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  product: Product;
  @Output() wishListProduct: EventEmitter<Product> = new EventEmitter;

  constructor(private productService: ProductService, wish: WishListService) { 
    this.product = this.productService.viewedProduct;
  }

  ngOnInit(): void {
  }

  addToCart(product: Product) {
    this.productService.addToCart(product);
  }

wishList(product: Product) {
  //this.wish.wishListProduct(product);
}

}

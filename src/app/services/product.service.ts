import { Injectable } from '@angular/core';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  cart: Product[] = [];
  viewedProduct: Product;
  total: number =0;

  constructor() {
    this.viewedProduct = {
      id : 0,
      name : '',
      url : '',
      price : 0, 
      reviews : 0,
      wishlist : false,
      description: '',
      quantity: 1   
    }
   }

  viewProduct(product: Product) {
    return this.viewedProduct = product;
  }

  addToCart(product: Product) {  
    if(this.cart.includes(product)) {
      alert(product.name+" already in cart")
    } else {
      this.cart.push(product);

    }      
    return this.cart;
  }

  removefromCart(product:Product) {
  this.cart = this.cart.filter(p => {
      return p.id !== product.id    
    })     
  }
  
  clearCart(): void {
    this.cart = [];
  }
}

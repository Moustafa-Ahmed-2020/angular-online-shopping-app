import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../Models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts: Product[] = this.productService.cart;
  grandTotal:number = 0;

 
  constructor(private productService: ProductService) {     
  }      
  
  
removeFromCart(product:Product) {
    this.productService.removefromCart(product); 
    this.cartProducts = this.productService.cart;
    alert(product.name+" removed from cart!");
    this.calculateGrandTotal();        
}



calculateGrandTotal() { 
  this.cartProducts.map(p=> {
    if(p.quantity) {

    } else {
      p.quantity = 1
    }
  })
   this.grandTotal = this.cartProducts.reduce((a,b) => {
    return a+(b.price*b.quantity)
   },0) 
}

ngOnInit(): void {  
    this.calculateGrandTotal();     
}  
    
clearCart(): void {
      this.productService.clearCart();
      this.cartProducts = [];
      alert("Cart empty");
      this.grandTotal = 0;
}

submitForm() { 
        
  }
}

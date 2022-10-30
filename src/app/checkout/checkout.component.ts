import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../Models/Product';
import { toString } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  total: number = 0;
  cartProducts: Product[] = this.productService.cart;

  username: string ='';
  cardnumber: number = 0;
  cvv:number = 0;
  address: string = '';


  constructor(private productService:ProductService) { }
  payment = this.productService.cart
  
  ngOnInit(): void {   
    this.total = this.cartProducts.reduce((a,b) => {
      return a+(b.price*b.quantity)
     },0) 
   }

   validateName(name: string) {
    if(name.length > 16) {
      alert("Your name is too long")
    }
   }

   validateCard(cardnumber: number) {
    if((cardnumber).toString().length > 16) {
      alert("Card number is 16 char long exactly")
    }
   }
  
  

  checkout() {
    alert("Purchase confirmed!");
  }
}

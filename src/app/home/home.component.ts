import { HttpService } from '../services/http.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/Product';
import { WishListService } from '../services/wish-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productList: Product[] = [];

  constructor(private productService: HttpService, private wish: WishListService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => {      
    this.productList = res;
        }
    );   
       
  }

}

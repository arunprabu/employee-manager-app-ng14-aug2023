import { Component, OnInit } from '@angular/core';
import { CartDataService } from '../../services/cart-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartItemsCount: number = 0;
  
  constructor(private cartDataService: CartDataService) {}

  ngOnInit(): void {
    // Let's subscribe to the latestCartItems Observable
    this.cartDataService.latestCartItems.subscribe((cartItems: any[]) => {
      console.log(cartItems.length);
      this.cartItemsCount = cartItems.length;
    });
  }
}

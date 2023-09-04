import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {
  // Step 1: Have the default cart items
  private defaultCartItems: any[] = [
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      category: 'men\'s clothing',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
    }
  ];

  // Step 2: Create an obj of BehaviorSubject with the above default cart items
  /* 
    It's Subject. 
    Because the subject should have default cart items we will use BehaviorSubject 
  */
  private cartItems = new BehaviorSubject(this.defaultCartItems);

  // Step 3: Let's make this as Observable. So that any comp can subscribe. Let's do it in Header Comp
  latestCartItems = this.cartItems.asObservable();

  // Step 4: Let some components update the cart items too

  constructor() {}

  addToCart(product: any) {
    // we should connect with rest api to add the above product
    // Let's work on adding this product into existing cart items
    console.log(product);
    this.latestCartItems
      .pipe(take(1))
      .subscribe((existingCartItems: any[]) => {
        console.log(existingCartItems);
        // update the cart items with the existing product and new product
        const updatedCartItems = [...existingCartItems, product];
        this.cartItems.next(updatedCartItems);
      });
  }
}

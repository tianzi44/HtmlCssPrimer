import {Component} from '@angular/core';
import {CartModel} from '../../model/cart.model';

@Component({
  selector: 'app-cart-detail',
  templateUrl: 'cart.detail.component.html'
})
export class CartDetailComponent {
  constructor(public cartModel: CartModel) {
    console.log('cartModel' + cartModel);
  }
}

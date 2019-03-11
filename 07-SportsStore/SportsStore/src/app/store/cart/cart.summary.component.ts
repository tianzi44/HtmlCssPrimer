import {Component} from '@angular/core';
import {CartModel} from '../../model/cart.model';

@Component({
  selector: 'app-cart-summary',
  moduleId: module.id,
  templateUrl: 'cart.summary.component.html',
  styleUrls: ['./cart.summary.component.css']
})
export class CartSummaryComponent {
  constructor(public cartModel: CartModel) {
    console.log('购物车组件加载了');
    console.log('cartModel' + cartModel);
  }
}

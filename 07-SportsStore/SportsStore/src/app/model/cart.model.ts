import {Inject, Injectable} from '@angular/core';
import {Product} from './Product';

@Injectable()
export class CartModel {
  public products: Array<Product> = new Array<Product>();
}

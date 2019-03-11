import {Product} from './Product';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import 'rxjs/add/observable/from';

@Injectable()
export class StaticDataSource {
  private products: Product[] = [
    new Product(1, '苹果6', '手机', '苹果第6代智能手机', 4000),
    new Product(2, '苹果6s', '手机', '苹果第6代智能手机', 5000),
    new Product(3, '苹果6s-plus', '手机', '苹果第6代智能手机', 8000),
    new Product(4, 'sureface', '计算机', '微软便携式笔记本', 12000),
    new Product(5, '外星人8系', '计算机', '外星人便携式笔记本', 18000),
    new Product(6, '华为荣耀8', '手机', '华为荣耀手机', 2000),
    new Product(7, '华为荣耀9', '手机', '华为荣耀手机', 3000),
    new Product(8, '华为荣耀10', '手机', '华为荣耀手机', 5000),
  ];

  getProducts(): Observable<Product[]> {
    return Observable.from([this.products]);
  }
}

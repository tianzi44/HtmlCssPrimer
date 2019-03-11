import {NgModule} from '@angular/core';
import {ProductRepository} from './ProductRepository';
import {StaticDataSource} from './StaticDataSource';
import {CartModel} from './cart.model';

@NgModule({
  // 告诉Angular应该将哪些类作为服务提供给依赖注入
  providers: [ProductRepository, StaticDataSource, CartModel]
})
export class ModelModule {
}

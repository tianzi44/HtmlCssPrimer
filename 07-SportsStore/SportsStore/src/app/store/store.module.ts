import {NgModule} from '@angular/core';
import {ModelModule} from '../model/model.module';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {StoreComponent} from './store.component';
import {CartSummaryComponent} from './cart/cart.summary.component';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule],
  declarations: [StoreComponent, CartSummaryComponent],
  exports: [StoreComponent, CartSummaryComponent]
})
export class StoreModule {
}

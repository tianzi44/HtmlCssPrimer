import {NgModule} from '@angular/core';
import {ModelModule} from '../model/model.module';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {StoreComponent} from './store.component';
import {CartSummaryComponent} from './cart/cart.summary.component';
import {CartDetailComponent} from './cartDetail/cart.detail.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  declarations: [StoreComponent, CartSummaryComponent, CartDetailComponent],
  exports: [StoreComponent, CartSummaryComponent, CartDetailComponent]
})
export class StoreModule {
}

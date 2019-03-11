import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {StoreModule} from './store/store.module';
import {StoreComponent} from "./store/store.component";
import {RouterModule} from "@angular/router";
import {CartDetailComponent} from "./store/cartDetail/cart.detail.component";
import {StoreFirstGuard} from "./storeFirst.guard";

@NgModule({
  imports: [BrowserModule, StoreModule, RouterModule.forRoot([{
    path: "store", component: StoreComponent, canActivate: [StoreFirstGuard]
  }, {
    path: "cart", component: CartDetailComponent, canActivate: [StoreFirstGuard]
  },
    {path: "**", redirectTo: "/store"}
  ])],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  providers: [StoreFirstGuard]
})
export class AppModule {
}

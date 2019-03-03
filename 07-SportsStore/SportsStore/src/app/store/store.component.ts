import {Component} from "@angular/core";
import {ProductRepository} from "../model/ProductRepository";
import {Product} from "../model/Product";

@Component({
  selector: "store",
  templateUrl: "store.component.html",
  moduleId: module.id
})
export class StoreComponent {
  constructor(private repository: ProductRepository) {
  }

  get products(): Product[] {
    return this.repository.getProducts();
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

}

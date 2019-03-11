import {Component} from '@angular/core';
import {ProductRepository} from '../model/ProductRepository';
import {Product} from '../model/Product';
import {CartModel} from '../model/cart.model';

@Component({
  selector: 'app-store',
  templateUrl: 'store.component.html',
  moduleId: module.id,
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  public selectedCategory: string = null;

  // 每页显示的条数
  public pageSize: number = 4;
  // 当前选择的页码
  public selectedPageNum: number = 1;

  constructor(private repository: ProductRepository, public cartModel: CartModel) {
    console.log('构造函数执行了');
  }

  get products(): Product[] {
    console.log('获取产品');
    const begIndex = (this.selectedPageNum - 1) * this.pageSize;
    const endIndex = this.selectedPageNum * this.pageSize;

    console.log('endIndex' + endIndex);

    return this.repository.getProducts(this.selectedCategory)
      .slice(begIndex, endIndex);
  }

  get categories(): string[] {
    console.log('获取分类');
    return this.repository.getCategories();
  }

  // 获取总页数
  get pageNums(): number[] {
    console.log('获取总页数');
    const pageNumEnd = Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.pageSize);
    const array = Array(pageNumEnd).fill(0).map((x, i) => i + 1);
    return array;
  }

  changeCategory(newCategory: string) {
    this.selectedCategory = newCategory;
  }

  changePageSize(pageSize) {
    this.pageSize = Number(pageSize);

    console.log('this.pageSize' + this.pageSize);
    this.changePageNum(1);
  }

  changePageNum(selectedPageNum: number) {
    this.selectedPageNum = selectedPageNum;
  }

  addProduct(product: Product) {
    this.cartModel.products.push(product);
  }
}

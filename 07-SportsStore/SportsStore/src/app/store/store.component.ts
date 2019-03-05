import {Component} from "@angular/core";
import {ProductRepository} from "../model/ProductRepository";
import {Product} from "../model/Product";

@Component({
  selector: "store",
  templateUrl: "store.component.html",
  moduleId: module.id,
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  public selectedCategory: string = null;

  //每页显示的条数
  public pageSize: number = 4;
  //当前选择的页码
  public selectedPageNum: number = 1;

  constructor(private repository: ProductRepository) {
    console.log("构造函数执行了");
  }

  get products(): Product[] {
    console.log("获取产品");
    let begIndex = (this.selectedPageNum - 1) * this.pageSize;
    let endIndex = this.selectedPageNum * this.pageSize;

    console.log("endIndex" + endIndex);

    return this.repository.getProducts(this.selectedCategory)
      .slice(begIndex, endIndex);
  }

  get categories(): string[] {
    console.log("获取分类");
    return this.repository.getCategories();
  }

  //获取总页数
  get pageNums(): number[] {
    console.log("获取总页数");
    let pageNumEnd = Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.pageSize);
    let array = Array(pageNumEnd).fill(0).map((x, i) => i + 1);
    return array;
  }

  changeCategory(newCategory: string) {
    this.selectedCategory = newCategory;
  }

  changePageSize(pageSize) {
    this.pageSize = Number(pageSize);

    console.log("this.pageSize"+this.pageSize);
    this.changePageNum(1);
  }

  changePageNum(selectedPageNum: number) {
    this.selectedPageNum = selectedPageNum;
  }


}

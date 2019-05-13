import { Component } from '@angular/core';

import { BaseResourceListComponent } from "../../../shared/components/base-resource-list.component/base-resource-list.component";

import { Category  } from "../shared/category.model";
import { CategoryService  } from "../shared/category.service";


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent extends BaseResourceListComponent<Category> {


  // variavel a ser utilizada no ngFor do template, retorna o valor dos resources
  // caso nao quisesse usar desta forma teriamos de trocar no template o nome da variavel categories por resources
  get categories() {
    return this.resources;
  }

  constructor(private categoryService: CategoryService) {
    super(categoryService);
   }

}

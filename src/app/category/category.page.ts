import { CategoryService } from './category.service';
import { Category } from './category.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  categories: Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.getAllCategories();
  }

}

import { Category } from './../category.model';
import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Discount } from '../discount.model';

@Component({
  selector: 'app-discount-list',
  templateUrl: './discount-list.page.html',
  styleUrls: ['./discount-list.page.scss'],
})
export class DiscountListPage implements OnInit {

  currentCategory: Category;
  categoryDiscounts: Discount[];
  categoryList: Category[];

  constructor(private activatedRoute: ActivatedRoute, private categoryService: CategoryService) {

   }

  ngOnInit() {
    this.categoryDiscounts = [];
    this.activatedRoute.paramMap.subscribe( paramMap => {
      if (!paramMap.has('categoryId')) {
        this.categoryList =  this.categoryService.getAllCategories();
        this.categoryList.forEach(Categorys => { 
          this.categoryDiscounts = this.categoryDiscounts.concat(Categorys.discounts);
       });
      } else {
        console.log('Activated');
        this.currentCategory = this.categoryService.getCategory(paramMap.get('categoryId'));
        this.categoryDiscounts = this.currentCategory.discounts;
      }
    });
  }

}
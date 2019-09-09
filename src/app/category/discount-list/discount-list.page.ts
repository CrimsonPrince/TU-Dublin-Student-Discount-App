import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../category.model';
import { Discount } from '../discount.model';

@Component({
  selector: 'app-discount-list',
  templateUrl: './discount-list.page.html',
  styleUrls: ['./discount-list.page.scss'],
})
export class DiscountListPage implements OnInit {

  currentCategory: Category;
  categoryDiscounts: Discount[];

  constructor(private activatedRoute: ActivatedRoute, private categoryService: CategoryService) {

   }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      if (!paramMap.has('categoryId')) {
        return;
      }
      this.currentCategory = this.categoryService.getCategory(paramMap.get('categoryId'));
      this.categoryDiscounts = this.currentCategory.discounts;
    });
  }

}

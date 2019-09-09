import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { Discount } from '../../discount.model';
import { Category } from '../../category.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-discount-detail',
  templateUrl: './discount-detail.page.html',
  styleUrls: ['./discount-detail.page.scss'],
})
export class DiscountDetailPage implements OnInit {

  currentCategory: Category;
  categoryDiscounts: Discount[];
  currentDiscount: Discount;

  constructor(private activatedRoute: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe( paramMap => {
      if (!paramMap.has('categoryId')) {
        return;
      }
      this.currentCategory = this.categoryService.getCategory(paramMap.get('categoryId'));
      this.categoryDiscounts = this.currentCategory.discounts;
      this.currentDiscount = this.categoryDiscounts.find( discount => { return discount.id == paramMap.get('discountId') });
    });
  }

}

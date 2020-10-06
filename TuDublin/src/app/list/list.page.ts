import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Discount } from './discount.model';
import { DiscountService } from './discount-service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  public discounts: Discount[];


  constructor(private activatedRoute: ActivatedRoute, private discountService: DiscountService) {

    this.discounts = this.discountService.getAll();

   }

   ngOnInit() {

  }

  loadDetail(id) {
    console.log(id);

  }

}

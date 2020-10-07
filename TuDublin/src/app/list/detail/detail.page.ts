import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiscountService } from '../discount-service';
import { Discount } from '../discount.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  id = null;
  discount: Discount;

  constructor(private activatedRoute: ActivatedRoute, private discountService: DiscountService) { }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.paramMap.get('discountId');
    this.discount = this.discountService.getById(this.id);
    console.log(this.discount);
  }

}
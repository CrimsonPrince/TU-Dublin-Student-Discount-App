import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Discount } from './discount.model';
import { DiscountService } from './discount-service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  public discounts: Discount[];


  constructor(private activatedRoute: ActivatedRoute, private discountService: DiscountService, private nativeStorage: NativeStorage, private router: Router) {

    this.discounts = this.discountService.getAll();

   }



   ngOnInit() {

    console.log('Entered');
    this.nativeStorage.getItem('didScan').then( scan => {
      console.log('Mind');
      console.log(scan.scanned);
      },
      error => {
        console.error(error);
        this.router.navigateByUrl('/home');
      }
    );

  }

  loadDetail(id) {
    console.log(id);

  }

}

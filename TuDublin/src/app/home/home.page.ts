import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data: any;
  constructor(private barcodeScanner: BarcodeScanner, private router: Router) {}

  ngOnInit() {
    this.scan();
  }

  scan() {
    this.data = null;
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.data = barcodeData;
      if(this.data.text === "https://qrco.de/bbkvla") {
        this.router.navigateByUrl("/list");
       }
    }).catch(err => {
      console.log('Error', err);
    });
  }

}

import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from '@ionic-native/barcode-scanner/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  encodeData: any;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;
 
  constructor(private barcodeScanner: BarcodeScanner, private storage: Storage, public router: Router) {
    this.encodeData = 'https://www.FreakyJolly.com';
    //Options https://qrco.de/bbFzYB
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
    if(this.storage.get('ion_did_tutorial')){ this.router
      .navigateByUrl('/tabs/all'); }
  }
 
  scanCode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        this.scannedData = barcodeData;
        if(this.scannedData["text"] === "https://qrco.de/bbFzYB") {
          this.router
          .navigateByUrl('/tabs/all')
          .then(() => this.storage.set('ion_did_tutorial', true));
        }
        console.log(this.scannedData["text"]); 
      })
      .catch(err => {
        console.log('Error', err);
      });
  }
 
}
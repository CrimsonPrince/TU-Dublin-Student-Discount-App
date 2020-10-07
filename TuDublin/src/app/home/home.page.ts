import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  data: any;
  constructor(private barcodeScanner: BarcodeScanner, private router: Router, private nativeStorage: NativeStorage) {}

  ngOnInit() {
    console.log('Init');
    
  }

  ionViewWillEnter() {

}



  scan() {
    this.data = null;
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.data = barcodeData;
      if (this.data.text === 'https://qrco.de/bbkvla') {
        this.nativeStorage.setItem('didScan', {scanned: 'true'});
        this.router.navigateByUrl('/list');
       }
    }).catch(err => {
      console.log('Error', err);
    });
  }

}

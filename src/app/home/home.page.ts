import { Component } from "@angular/core";
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from "@ionic-native/barcode-scanner/ngx";
 
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  encodeData: any;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;
 
  constructor(private barcodeScanner: BarcodeScanner) {
    this.encodeData = "https://www.FreakyJolly.com";
    //Options
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }
 
  scanCode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        alert("Barcode data " + JSON.stringify(barcodeData));
        this.scannedData = barcodeData;
      })
      .catch(err => {
        console.log("Error", err);
      });
  }
 
  encodedText() {
    this.barcodeScanner
      .encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData)
      .then(
        encodedData => {
          console.log(encodedData);
          this.encodeData = encodedData;
        },
        err => {
          console.log("Error occured : " + err);
        }
      );
  }
}
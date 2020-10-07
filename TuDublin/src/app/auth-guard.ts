import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
 providedIn: 'root'
})
export class AuthGuard implements CanActivate {

 constructor(private nativeStorage: NativeStorage) {}
 canActivate(
   next: ActivatedRouteSnapshot,
   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

   return this.nativeStorage.getItem('didScan').then( scan => { if (scan.scanned === "true") { console.log("Qr Scanned"); return false; } else { console.log("No Scan"); return true; } }  );
}
}
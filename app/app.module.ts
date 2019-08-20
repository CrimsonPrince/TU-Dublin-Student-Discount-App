import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AnimationsService } from "./animations-service";
import { LandmarksService } from "./landmarks-service";
import { Landmarks2Service } from "./landmarks2-service";
@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        AnimationsService,
        LandmarksService,
        Landmarks2Service
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }

import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { AngularFireStorageModule} from '@angular/fire/Storage';

import { tab1 } from "../pages/tab1/tab1";
import { tab2 } from "../pages/tab2/tab2";
import { tab3 } from "../pages/tab3/tab3";
import { tab4 } from "../pages/tab4/tab4";
import { tab5 } from "../pages/tab5/tab5";

import { TabsPage } from "../pages/tabs/tabs";
import { GlobalService } from "./global.service";
import appComponentCss from "./app.component.css";

@NgModule({
  declarations: [MyApp, tab1, tab2, tab3, tab4, tab5, TabsPage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, tab1, tab2, tab3,tab4, tab5, TabsPage],
  providers: [
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    GlobalService
  ]
})
export class AppModule {}

@NgModule({
  declarations: [appComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule,forRoot(),
    AppRoutingModule,
    AngularFireModule, initializeApp (environment, firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [{provide " RouteReuseStrategy, useClass: IonicRoutesStrategy"}
  bootstrap: [appComponent],
  
})


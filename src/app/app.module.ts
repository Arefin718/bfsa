import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import {SignupPage} from "../pages/signup/signup";
import {NearbyPage} from "../pages/nearby/nearby";
import {SearchPage} from "../pages/search/search";
import {TabsPage} from "../pages/tabs/tabs";
import {RestaurantListPage} from "../pages/restaurant-list/restaurant-list";
import {RestaurantDetailsPage} from "../pages/restaurant-details/restaurant-details";
import { RestaurantProvider } from '../providers/restaurant/restaurant';
import {HttpClientModule} from "@angular/common/http";
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
import {FaqPage} from "../pages/faq/faq";
import {ContactUsPage} from "../pages/contact-us/contact-us";
import {FeedbackPage} from "../pages/feedback/feedback";
import {AdvancedSearchPage} from "../pages/advanced-search/advanced-search";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    NearbyPage,
    SearchPage,
    TabsPage,
    RestaurantListPage,
    RestaurantDetailsPage,
    FaqPage,
    ContactUsPage,
    FeedbackPage,
    AdvancedSearchPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    NearbyPage,
    SearchPage,
    TabsPage,
    RestaurantListPage,
    RestaurantDetailsPage,
    FaqPage,
    ContactUsPage,
    FeedbackPage,
    AdvancedSearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestaurantProvider,
    RestaurantProvider,
    BarcodeScanner
  ]
})
export class AppModule {}

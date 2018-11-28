import {Component, ViewChild} from '@angular/core';
import {MenuController, NavController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import {TabsPage} from "../pages/tabs/tabs";
import {RestaurantListPage} from "../pages/restaurant-list/restaurant-list";
import {RestaurantDetailsPage} from "../pages/restaurant-details/restaurant-details";
import {NearbyPage} from "../pages/nearby/nearby";
import {FaqPage} from "../pages/faq/faq";
import {ContactUsPage} from "../pages/contact-us/contact-us";
import {FeedbackPage} from "../pages/feedback/feedback";
import {AdvancedSearchPage} from "../pages/advanced-search/advanced-search";
import {SignupPage} from "../pages/signup/signup";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = TabsPage;
  loginPage: any = LoginPage;
  faqPage: any = FaqPage;
  contactUsPage : any  = ContactUsPage;
  feedbackPage : any = FeedbackPage;
  advancedSearchPage : any = AdvancedSearchPage;
  signUpPage : any = SignupPage;

  @ViewChild('nav') nav : NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCrtl : MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page:any){
      this.nav.setRoot(page);
      this.menuCrtl.close();
  }
}


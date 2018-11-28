import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestaurantListPage} from "../restaurant-list/restaurant-list";
import {RestaurantProvider} from "../../providers/restaurant/restaurant";
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
import {RestaurantDetailsPage} from "../restaurant-details/restaurant-details";

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  keyword : string;
  num: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restaurantProvider : RestaurantProvider,
              private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log("SearchPage");
  }

  onGoToRestaurantList(){


    if(typeof this.keyword === 'undefined'){
      return false;
    }

    this.restaurantProvider.searchRestaurantbyNameorId(this.keyword.toString()).then(data => {
      this.navCtrl.push(RestaurantListPage,{
        rests:data
      });
    });

  }

  scan() {
    this.barcodeScanner.scan().then(data => {
      this.restaurantProvider.searchRestaurantbyId(data.text).then(data => {
        this.navCtrl.push(RestaurantDetailsPage,{
          rest:data
        });
      });
    });
  }


}

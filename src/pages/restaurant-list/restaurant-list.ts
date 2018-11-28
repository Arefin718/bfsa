import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestaurantProvider} from "../../providers/restaurant/restaurant";
import {RestaurantDetailsPage} from "../restaurant-details/restaurant-details";

/**
 * Generated class for the RestaurantListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurant-list',
  templateUrl: 'restaurant-list.html',
})
export class RestaurantListPage {

  restaurants : any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public restaurantProvider:RestaurantProvider) {
    this.restaurants = navParams.get('rests');
    if(this.restaurants.length==0){
      this.restaurants=false;
    }
  }


  onGoToRestaurantDetails(restaurantId){
    this.restaurantProvider.searchRestaurantbyId(restaurantId).then(data => {
      this.navCtrl.push(RestaurantDetailsPage,{
        rest:data
      });
    });

  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantListPage');
  }

}

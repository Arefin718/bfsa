import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestaurantProvider} from "../../providers/restaurant/restaurant";
import {RestaurantDetailsPage} from "../restaurant-details/restaurant-details";

/**
 * Generated class for the NearbyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nearby',
  templateUrl: 'nearby.html',
})
export class NearbyPage implements OnInit{


  nearbyRestaurants : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restaurantProvider : RestaurantProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NearbyPage');
  }


  ngOnInit(){
    this.restaurantProvider.findNearbyRestaurant().then(data => {
      this.nearbyRestaurants=data;
    });
  }

  onGoToRestaurantDetails(restaurantId){
    this.restaurantProvider.searchRestaurantbyId(restaurantId).then(data => {
      this.navCtrl.push(RestaurantDetailsPage,{
        rest:data
      });
    });

  }





}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import restaurants from "../../pages/data/restaurants";


@Injectable()
export class RestaurantProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestaurantProvider Provider');
  }
 


  findNearbyRestaurant() {
    return new Promise(resolve => {
      resolve(restaurants)
    });
  }

  searchRestaurantbyNameorId(keyWord){
    return new Promise(resolve => {
      resolve(restaurants.filter(u=>u.title_english.toLowerCase().includes(keyWord.toLowerCase()) ||
	    u.title_bangla.includes(keyWord.toLowerCase()) ||
		 u.company_id.includes(keyWord)||
		 u.location_english.toLowerCase().includes(keyWord.toLowerCase())||
		 u.location_bangla.includes(keyWord)
	   
		
		
	  ));
    });

    }


  searchRestaurantbyId(restaurantId){
    return new Promise(resolve => {
      resolve(restaurants.find(u=>u.company_id==restaurantId));
    });

  }




}

import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the RestaurantDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurant-details',
  templateUrl: 'restaurant-details.html',
})
export class RestaurantDetailsPage {

  restaurant : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl : AlertController) {
    this.restaurant=navParams.get('rest');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantDetailsPage');
  }

  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Complain',
      message: "Enter your complain",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Submit',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }


}

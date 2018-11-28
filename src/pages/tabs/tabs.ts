import {Component} from "@angular/core";
import {SearchPage} from "../search/search";
import {NearbyPage} from "../nearby/nearby";

@Component({
  selector :'page-tabs',
  templateUrl:'tabs.html'
})

export class TabsPage {
  searchPage = SearchPage;
  nearbyPage = NearbyPage;
}

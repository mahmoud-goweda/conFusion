import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../service/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionsService } from '../service/promotions.service';
import {LeaderService} from '../service/leader.service'
import { Leader } from '../shared/leader';
import { flyInOut,expand } from '../animations/app.animation';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  url;
  dishErrMess:string;
  promoerrmess:string;
  leadererrmess:string;
  constructor(private dishservice: DishService,
    private promotionservice: PromotionsService,
    private leaderService:LeaderService,
    @Inject('BaseURL') private baseURL) { }
    

  ngOnInit() {
    this.dishservice.getFeaturedDish()
    .subscribe(dish =>  this.dish =dish ,  errmess => this.dishErrMess = <any>errmess);
      this.promotionservice.getFeaturedPromotion()
      .subscribe(promo => this.promotion=promo ,
        errmess => this.promoerrmess = <any>errmess);
     this.leaderService.getFeaturedLeader().subscribe(leader => this.leader =leader,
      errmess => this.leadererrmess = <any>errmess);

     this.url=this.baseURL;
  }

}

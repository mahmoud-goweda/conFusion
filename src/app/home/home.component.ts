import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../service/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionsService } from '../service/promotions.service';
import {LeaderService} from '../service/leader.service'
import { Leader } from '../shared/leader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  url;
  dishErrMess:string;
  constructor(private dishservice: DishService,
    private promotionservice: PromotionsService,
    private leaderService:LeaderService,
    @Inject('BaseURL') private baseURL) { }
    

  ngOnInit() {
    this.dishservice.getFeaturedDish()
    .subscribe(dish =>  this.dish =dish ,  errmess => this.dishErrMess = <any>errmess);
      this.promotionservice.getFeaturedPromotion()
      .subscribe(promo => this.promotion=promo);
     this.leaderService.getFeaturedLeader().subscribe(leader => this.leader =leader);
     this.url=this.baseURL;
  }

}

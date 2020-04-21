import { Component, OnInit } from '@angular/core';
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

  constructor(private dishservice: DishService,
    private promotionservice: PromotionsService,
    private leaderService:LeaderService) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish()
    .then(dish =>  this.dish =dish);
      this.promotionservice.getFeaturedPromotion()
      .then(promo => this.promotion=promo);
     this.leaderService.getFeaturedLeader().then(leader => this.leader =leader)
  }

}

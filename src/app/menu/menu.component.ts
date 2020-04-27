import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import {DishService} from '../service/dish.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes:Dish[]
  url;
  constructor(private dishService: DishService,
    @Inject('BaseURL') private baseURL) { }

      ngOnInit() {
     this.dishService.getDishes()
     .subscribe(dishes => this.dishes =dishes);
     this.url=this.baseURL
  }

}

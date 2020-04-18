import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import {DishService} from '../service/dish.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes:Dish[]
  selectedDish :Dish;
  onSelect(dish){
    this.selectedDish=dish;
  }
  constructor(private dishServive:DishService) { }
  ngOnInit(): void {
    this.dishes = this.dishServive.getDishes();
  }

}

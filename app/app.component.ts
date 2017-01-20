import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <h3>Keep log for {{month}}/{{day}}/{{year}}</h3>
    <meal-list [childMealList]="masterMealList"></meal-list>
    <new-meal (newMealSender)="addMeal($event)"></new-meal>
  </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() +1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  masterMealList: Meal[] = [
    new Meal('Big Mac', 'It was worth it', 560),
    new Meal('McChicken', 'Im a sucker for these', 370),
    new Meal('Double Cheeseburger', 'It was my appetizer', 460)
  ];

  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
}

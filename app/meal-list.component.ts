import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <ul>
    <li *ngFor="let currentMeal of childMealList">{{currentMeal.name}}</li>
  </ul>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
}

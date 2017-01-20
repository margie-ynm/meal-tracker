import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <h5>Filter by:</h5>
  <select (change)="onChange($event.target.value)">
    <option value="allMeals" selected="selected">All Meals</option>
    <option value="lowCalories">Meals less than 500 calories</option>
    <option value="highCalories">Meals over 500 calories</option>
  </select>
  <br>
  <br>
  <ul>
    <li *ngFor="let currentMeal of childMealList | calorieness:filterByCalorieness">
      <h4>{{currentMeal.name}}</h4>
      <p>Details: {{currentMeal.details}}<p>
      <p>{{currentMeal.calories}} Calories<p>
      <button class="btn btn-link" (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
    </li>
    <hr>
  </ul>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }

  filterByCalorieness: string = "allMeals";

  onChange(optionFromMenu) {
    this.filterByCalorieness = optionFromMenu;
  }
}

import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <h3>Keep log for {{month}}/{{day}}/{{year}}</h3>
    <meal-list [childMealList]="masterMealList" (clickSender)="editMeal($event)"></meal-list>
    <new-meal (newMealSender)="addMeal($event)"></new-meal>
    <hr>
    <edit-meal [childSelectedMeal]="selectedMeal" (doneButtonClickedSender)="finishedEditing()"></edit-meal>
  </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() +1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedMeal = null;

  masterMealList: Meal[] = [
    new Meal('Eggs and Bacon', 'N/A', 460),
    new Meal('Pizza', 'Had 3 slices', 875),
    new Meal('Spaghetti', 'Extra sauce - it was worth it', 560)
  ];

  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }

  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }

  finishedEditing() {
    this.selectedMeal = null;
  }
}

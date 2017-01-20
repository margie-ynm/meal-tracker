import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <h3>New Meal</h3>
    <div>
      <label>Enter name of meal:</label>
      <input #newName class="form-control">
      <label>Enter details:</label>
      <input #newDetails class="form-control">
      <label>Enter number of calories:</label>
      <input #newCalories class="form-control">
      <button class="btn btn-success" (click)="submitForm(newName.value, newDetails.value, newCalories.value); newName.value=''; newDetails.value=''; newCalories.value='';">Add</button>
    </div>

  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  submitForm(name: string, details: string, calories: number) {
    var newMealToAdd: Meal = new Meal(name, details, calories);
    this.newMealSender.emit(newMealToAdd);
  }
}

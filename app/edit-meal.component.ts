import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div>
    <div *ngIf="childSelectedMeal">
      <h3>{{childSelectedMeal.Name}}</h3>
      <hr>
      <h3>Edit Meal</h3>
      <label>Enter name of meal:</label>
      <input [(ngModel)]="childSelectedMeal.name">
      <label>Enter details:</label>
      <input [(ngModel)]="childSelectedMeal.details">
      <label>Enter amount of calories:</label>
      <input [(ngModel)]="childSelectedMeal.calories">
      <button (click)="doneButtonClicked()">Done</button>
    </div>
  </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `

    <div *ngIf="childSelectedMeal" class="well">
      <h3>{{childSelectedMeal.Name}}</h3>
      <h3>Edit Meal</h3>
      <label>Enter name of meal:</label>
      <input [(ngModel)]="childSelectedMeal.name" class="form-control">
      <label>Enter details:</label>
      <input [(ngModel)]="childSelectedMeal.details" class="form-control">
      <label>Enter number of calories:</label>
      <input [(ngModel)]="childSelectedMeal.calories" class="form-control">
      <button class="btn btn-primary" (click)="doneButtonClicked()">Done</button>

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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <h2 
        style="background-color: rgb(255, 0, 0);">Testing Counter Styles, CSS and Events!</h2>
      <p class="counter-value">Counter Value: {{ counter }}</p>

      <button
        type="button"
        class="btn btn-success increment-btn"
        (click)="handleIncrement()">
        Increment
      </button>
      <button
        type="button"
        class="btn btn-danger"
        (click)="handleDecrement()">
        Decrement
      </button>
    </div>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  counter = 0;

  constructor() {}

  ngOnInit(): void {}

  handleIncrement() {
    this.counter++;
  }

  handleDecrement() {
    this.counter--;
  }
}

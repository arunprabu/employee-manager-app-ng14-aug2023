import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-testing-demo',
  template: `
    <div>
      <h1>Unit Testing Demo!</h1>

      <app-counter></app-counter>
    </div>
  `,
  styles: [
  ]
})
export class UnitTestingDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

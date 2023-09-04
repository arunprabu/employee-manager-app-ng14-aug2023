import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  template: ` <div>
    <h1>Pipes Demo</h1>
    <p>Utilities to transform info one format to another</p>
    <p>Date pipe demo</p>
    <p>Date: {{ today }}</p>
    <p>Date: {{ today | date }}</p>
    <p>Date: {{ today | date: 'dd/MM/yyyy hh:mm:ss a' }}</p>

    <hr />
    <p>Uppercase and lowercase pipes demo</p>
    <p>{{ randomText }}</p>
    <p>{{ randomText | uppercase }}</p>
    <p>{{ randomText | lowercase }}</p>
  </div>`,
  styles: []
})
export class AboutUsComponent implements OnInit {
  today: Date = new Date();
  randomText = 'The web development framework for building the future';

  constructor() {}

  ngOnInit(): void {}
}

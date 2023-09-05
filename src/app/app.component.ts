import { Component } from '@angular/core';

// Decorator that connects html, css, js
@Component({
  selector: 'app-root', // the comp is exposed in a element selector 'app-root' used in index.html
  templateUrl: './app.component.html', // html is must -- it should be only one
  styleUrls: ['./app.component.css'] // css is optional and can be many
})
export class AppComponent {
  // ts
  title: any = 'Emp Manager App!';
  courseName = 'Angular 14';
}


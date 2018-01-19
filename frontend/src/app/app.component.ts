import { Component } from '@angular/core';
// import messages component
import { NavComponent } from './nav.component';





@Component({
  selector: 'app-root',
  template: `
  <nav></nav>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent {
}

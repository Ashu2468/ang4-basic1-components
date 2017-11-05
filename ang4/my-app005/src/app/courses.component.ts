import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
   <button class="btn btn-primary" [class.active]="isActive">save</button>
   <button [style.backgroundColor]="isActive ? 'blue' : 'white'">save</button>
   `
})
export class CoursesComponent {
  isActive = true;
}

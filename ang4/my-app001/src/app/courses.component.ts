import { Component } from '@angular/core';

@Component({
selector: 'courses',
//1 way-
//template: '<h2>{{ "Title :" + title }}</h2>'
//2nd way-
//template: '<h2>{{ getTitle() }}</h2>'
//3rd way using array-
template: `
  <h2>{{ title }}</h2>
  <ul>
    <li *ngFor="let course of courses">
      {{ course }}
    </li>
  </ul>
`
})
export class CoursesComponent {
  title = "List of courses";
  getTitle(){
    return this.title;
  }

  courses = ["course1","course2","course3"];
}

//1.add a component 
//2.register the component into main-module.ts under declarations
//3.add element in html eg add tag <courses></courses> in html.
// note -use of backtag allows breaking if template into multiple lines

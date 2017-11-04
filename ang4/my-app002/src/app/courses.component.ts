import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

//logic can be written in component to call http endpoint to get courses.
//but a component sudnt include any logic other then presentation
// so to write logic in angular we use services 
//we will define a seperate class where we will write service 

@Component({
selector: 'courses',
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
 
  //now we have a service defined, we will now use it as below.
  constructor(service: CoursesService){
    //let service = new CoursesService();
    //initialize the constructor with service.
    //this.courses = service.getCourses;
    this.courses=service.course;
  }

  title = "List of courses";
  courses;
  getTitle(){
    return this.title;
  }  
}
//at last dont forget to enter service in module providers as
//providers: [CoursesService]

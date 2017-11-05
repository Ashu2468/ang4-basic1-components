import { Injectable } from "@angular/core";

@Injectable()
export class CoursesService{
  course=["course1","course2","course3"];
  getCourses(){
    //return ["course1","course2","course3"];    
  }
}
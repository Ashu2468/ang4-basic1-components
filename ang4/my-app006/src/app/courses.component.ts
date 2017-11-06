import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
    <div (click)="onDivClicked()">
      <button (click)="onSave($event)">save</button>
    </div>
    <input (keyup)="onKeyUp($event)" />
    <input (keyup.shift)="onKeyUp1()" />
    <input (keyup.enter)="onKeyUp2($event)" />
    <input #email (keyup.enter)="onKeyUp5(email.value)" />
  `
})
export class CoursesComponent {
  onDivClicked(){
    console.log("Div was clicked");
  }
  onSave($event){
    $event.stopPropagation();
    console.log("Button was clicked", $event);
  }
  onKeyUp($event){
    if($event.keyCode===13){
      console.log("Enter was pressed");
    }
  }
  onKeyUp1(){
    console.log("shift was pressed");
  }
  onKeyUp2($event){
    console.log($event.target.value);
  }
  onKeyUp5(email){
    console.log(email);
  }
}

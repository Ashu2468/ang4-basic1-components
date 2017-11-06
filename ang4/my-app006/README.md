explaination:

event binding:
    use to handle event raised from dom like keystrokes, mouse movements etc:

    here we will see how to add a click event on button first.
    <button (click)="onSave()">save</button>

    to add some parameter we will add $ eg
    <button (click)="onSave($event)">save</button>

    we are logging this event for just checking here
    console.log("Button was clicked", $event);

    later in it we will handle event bubbling - event inside an event 
    template: `
        <div (click)="onDivClicked()">
          <button (click)="onSave($event)">save</button>
        </div>
      `
    to stop event propagation use-
    $event.stopPropagation();

Event filtering:
    will see how to check key press events 
    <input (keyup)="onKeyUp($event)" />

    for a specific key simply put 
      <input (keyup.enter)="onKeyUp($event)" />

    and remove all events it will still work.

Template variables:
   used to simplify code 
   how can we get the value typed in input box??
   <input (keyup)="onKeyUp($event)" />

   onKeyUp($event){
     console.log($event.target.value);
     it will print every single digit we will enter

     to print complete digit only when we type enter
     <input (keyup.enter)="onKeyUp($event)" />
  }
# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

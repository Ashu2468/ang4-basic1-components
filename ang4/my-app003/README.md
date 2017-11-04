explaination:

we learned about interpolation : double curly braces {{ }} to display data
at time of compiling interpolation get converted in property binding.
property binding:
binding property of a dom element (src here) to a field in our component eg: <img src="{{ imageUrl }}"/>

here we are learning one way binding (component to dom)

dom: document object model:
tree representation of objects in memory.

html:representation of dom in texts.

Can't bind to 'colspan' since it isn't a known property of 'td'. 
this error comes when html cant be rendered as dom 
to solve it simply add [attr.]
this is attribute binding .

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

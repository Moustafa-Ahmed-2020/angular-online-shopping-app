# AngularProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.5.

## Project description

This project is a single page application that represents an online store, where you can vew and buy products. The application is modular and each route is a separate component, the main component is the home component where he product list lives and each product can be viewed indiviually in the product-page component where you can see its description, once you like a product and add it to the cart (the component name..well "cart") you can modify the quantity of the items as you like and then proceed to the checkout component. From there you can enter payment details (not real details of course) and confirm your purchase. The final page is just like confirmation message. Data is transfered between most components is through services, since parent-child component relationship is only present between home and product components.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

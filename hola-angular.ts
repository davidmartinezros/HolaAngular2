import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'hola-angular',
  template: '<h1> {{greeting}} </h1>'
})
class HolaAngularComponent {
  greeting: string;
  constructor() {
    this.greeting = '¡Hola Angular 2!';
  }
}

bootstrap(HolaAngularComponent); // Component is bootstrapped!

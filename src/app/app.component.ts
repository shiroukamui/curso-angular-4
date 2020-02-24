import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'Platzi Square';
  angular = 4
  version = 5
  ready = false

  constructor() {
    setTimeout(() => {
      this.ready = true
    }, 3000);
  }

  sayHello(){
    alert('Hola Mundo')
  }
}

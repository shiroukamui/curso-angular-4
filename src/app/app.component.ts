import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {

  title: string = 'Platzi Square';
  angular: number = 4
  version: number = 5
  ready: boolean = false
  name: string = ''
  lastName: string = ''

  constructor() {
    setTimeout(() => {
      this.ready = true
    }, 3000);
  }

  sayHello(){
    alert(`Hola ${this.title}`)
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {

  places: any = [
    { name: 'Floreria la Gardenia' },
    { name: 'Donas la Delicia' },
    { name: 'Veterinaria Huellitas' },
    { name: 'Floreria la Gardenia' },
    { name: 'Donas la Delicia' },
    { name: 'Veterinaria Huellitas' }
  ]
}

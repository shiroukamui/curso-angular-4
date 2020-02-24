import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {

  places: any = [
    { active: true, name: 'Floreria la Gardenia' },
    { active: true, name: 'Donas la Delicia' },
    { active: false, name: 'Veterinaria Huellitas' },
    { active: true, name: 'SushiRoll' },
    { active: true, name: 'Hotel el Descanso' },
    { active: false, name: 'Zapateria el Clavo' }
  ]
}

import { Directive, HostListener } from '@angular/core';
import { AppComponent } from '../app.component'

@Directive({
  selector: 'li[appClickCounter]'
})

export class ClickCounterDirective {

  nClicks: number = 0
  @HostListener('click', ['$event.target']) onClick(btn) {
    this.nClicks++
    console.log(`${btn.textContent} presionado ${this.nClicks} veces`)
  }

}

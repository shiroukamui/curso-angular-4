import { Directive, HostListener, HostBinding } from '@angular/core';
import { AppComponent } from '../app.component'

@Directive({
  selector: '[appClickCounter]'
})

export class ClickCounterDirective {

  nClicks: number = 0

  @HostBinding('style.opacity')
  opacity: number = 0.1

  @HostListener('click', ['$event.target'])
  onClick(btn): void {
    this.nClicks++
    console.log(`${btn.textContent} presionado ${this.nClicks} veces`)
    this.opacity += 0.2
  }


}

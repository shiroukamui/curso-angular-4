import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickCounter]'
})

export class ClickCounterDirective {

  nClicks: number = 0

  @HostBinding('style.opacity')
  opacity: number = 1

  @HostListener('click', ['$event.target'])
  onClick(btn): void {
    this.nClicks++
    console.log(`${btn.textContent} presionado ${this.nClicks} veces`)
    this.opacity -= 0.1
  }


}

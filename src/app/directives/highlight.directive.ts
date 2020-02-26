import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  @Input('appHighlight') plan: string

  constructor(private elRef: ElementRef, private render: Renderer2) {}

  ngOnInit():void {
    if (this.plan === 'bought') {
      this.render.setStyle(this.elRef.nativeElement, 'background-color', '#cccc00')
      this.render.setStyle(this.elRef.nativeElement, 'font-weight', 'bold')
    }
  }

}

import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  constructor(private element: ElementRef) { }

  @HostListener('mouseover') enter(){
    this.element.nativeElement.style.textDecoration = "underline"
  }

  @HostListener('mouseleave') leave(){
    this.element.nativeElement.style.textDecoration = "none"
  }

}
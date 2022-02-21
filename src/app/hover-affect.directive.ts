import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  constructor(private element: ElementRef) { }

  @HostListener('mouseover') enter(){
    this.element.nativeElement.style.textDecoration = "underline"
    this.element.nativeElement.style.fontWeight = "bold"
    this.element.nativeElement.style.borderStyle = "inset"
  }

  @HostListener('mouseleave') leave(){
    this.element.nativeElement.style.textDecoration = "none"
    this.element.nativeElement.style.fontWeight = "normal"
    this.element.nativeElement.style.borderStyle = "none"
  }

}
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  constructor(private element: ElementRef) { }

  @HostListener('mouseover') hover(){
    if(this.element.nativeElement.target){
      this.element.nativeElement.style.textDecoration = "underline"
      console.log(this.element);
      
    }
    this.element.nativeElement.style.textDecoration = "none"
    console.log(this.element);
    
  }

}

import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMenuToggle]'
})
export class MenuToggleDirective {

  toggler: boolean = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') toggleMenu() {
    if(!this.toggler) {
    this.renderer.setStyle(this.elRef.nativeElement, 'display', 'hidden');
    this.toggler = !this.toggler;
  }
  else {
    this.renderer.removeStyle(this.elRef.nativeElement, 'display');
    this.toggler = !this.toggler;
  }
  }
}

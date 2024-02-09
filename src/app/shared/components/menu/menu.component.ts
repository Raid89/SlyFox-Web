import { HostListener, Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'sly-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  private lastScrollPosition = 0;
  public isMenuHidden = false; // Cambiando el nombre de la variable

  constructor(private renderer: Renderer2, private el: ElementRef){}
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY > this.lastScrollPosition) {
      // Hacer el menú invisible al hacer scroll hacia abajo
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(-100%)');
      this.isMenuHidden = true; // Cambiando el nombre de la variable
    } else {
      // Hacer el menú visible al hacer scroll hacia arriba
      this.renderer.removeStyle(this.el.nativeElement, 'transform');
      this.isMenuHidden = false; // Cambiando el nombre de la variable
    }
    this.lastScrollPosition = scrollY;
  }

}

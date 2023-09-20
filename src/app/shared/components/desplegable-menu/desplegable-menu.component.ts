import { Component } from '@angular/core';

@Component({
  selector: 'sly-desplegable-menu',
  templateUrl: './desplegable-menu.component.html',
  styleUrls: ['./desplegable-menu.component.scss']
})
export class DesplegableMenuComponent {
  isMenuOpen = false;
  
  constructor(){}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

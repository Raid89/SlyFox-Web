import { Component, Input } from '@angular/core';

@Component({
  selector: 'sly-item-nav-bar',
  templateUrl: './item-nav-bar.component.html',
  styleUrls: ['./item-nav-bar.component.scss']
})
export class ItemNavBarComponent {
  @Input() type!: 'simple' | 'select';
  @Input() selectElements!: ItemNavBarComponent[]; 
  @Input() text!: string;
  @Input() route!: string;
}

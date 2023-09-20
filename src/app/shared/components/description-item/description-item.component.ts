import { Component, Input } from '@angular/core';

@Component({
  selector: 'sly-description-item',
  templateUrl: './description-item.component.html',
  styleUrls: ['./description-item.component.scss']
})
export class DescriptionItemComponent {

  @Input() title!: string;
  @Input() text!: string;
  @Input() icons!: string[];

}

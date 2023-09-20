import { Component, Input } from '@angular/core';

@Component({
  selector: 'sly-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
 @Input() avatar!: string;
 @Input() nombre!: string;
 @Input() nickname!: string;
 @Input() textButton!: string;
 @Input() button: boolean = true;
}

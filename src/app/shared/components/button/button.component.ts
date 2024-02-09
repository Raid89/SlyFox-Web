import { Component, Input } from '@angular/core';

@Component({
  selector: 'sly-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() text!: string;
  @Input() icon!: string;
  @Input() backgroundColor!: string;
  @Input() backgroundHover!: string;
  @Input() textColor!: string;
  @Input() linkHref!: string;

  public hover = false;

}

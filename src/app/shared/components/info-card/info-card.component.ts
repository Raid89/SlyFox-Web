import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sly-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

  @Input() title!: string;
  @Input() text!: string;
  @Input() colorButton?: string  = "#15242F";
  @Input() textButton = "Ver más";
  @Input() images?: Array<string>;

  ngOnInit() {
    if (this.colorButton === null || this.colorButton === undefined) {
      this.colorButton = "#15242F"; // Valor predeterminado si colorButton es null o undefined
    }
  }
}

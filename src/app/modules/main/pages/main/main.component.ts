import { Component } from '@angular/core';
import { IItemDescription } from 'src/app/interfaces/components-interface';

@Component({
  selector: 'sly-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public arrayItemsDescription: IItemDescription[] = [
    {
      title: 'Diseño UI/UX',
      text: 'Diseñamos interfaces intuitivas y estéticamente atractivas que brindan experiencias de usuario excepcionales.',
      icons: ['color_palette_icon.svg', 'user_check_icon.svg']
    },
    {
      title: 'Desarrollo web',
      text: 'Creando experiencias web cautivadoras y funcionales que impulsan el crecimiento de tu negocio.',
      icons: ['ham_icon.svg',]
    },
    {
      title: 'Marketing Digital',
      text: 'Transformamos ideas en resultados tangibles a través de estrategias de marketing innovadoras y diseño impactante. Impulsamos el éxito de tu negocio en el mundo digital.',
      icons: ['earth_icon.svg',]
    },
  ]
}

import { Component, OnInit } from '@angular/core';
import { IInfoCard, IItemDescription } from 'src/app/interfaces/components-interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SendContactService } from 'src/app/services/send-contact.service';

@Component({
  selector: 'sly-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public arrayInfoCards: Array<IInfoCard> = [
    {
      title: 'Desarrollo Web',
      text: 'Creando experiencias web cautivadoras y funcionales que impulsan el crecimiento de tu negocio.',
      images: ['icon-layers', 'icon-github'],
      link: '#dev'
    },

    {
      title: 'Diseño UI/UX',
      text: 'Diseñamos interfaces intuitivas y estéticamente atractivas que brindan experiencias de usuario excepcionales.',
      images: ['icon-brush', 'icon-star'],
      colorButton: '#FF7070',
      link: '#design'
    },

    {
      title: 'Marketing Digital',
      text: 'Transformamos ideas en resultados tangibles a través de estrategias de marketing innovadoras y diseño impactante. Impulsamos el éxito de tu negocio en el mundo digital.',
      images: ['icon-heart', 'icon-activity'],
      link: '#marketing'
    },
  ]

  constructor(private formService: SendContactService) { }

  ngOnInit(): void {
  }
}

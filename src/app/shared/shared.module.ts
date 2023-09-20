import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ButtonComponent } from './components/button/button.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { MenuComponent } from './components/menu/menu.component';
import { ItemNavBarComponent } from './components/item-nav-bar/item-nav-bar.component';
import { DescriptionItemComponent } from './components/description-item/description-item.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DesplegableMenuComponent } from './components/desplegable-menu/desplegable-menu.component';


@NgModule({
  declarations: [
    ButtonComponent,
    InfoCardComponent,
    MenuComponent,
    ItemNavBarComponent,
    DescriptionItemComponent,
    UserCardComponent,
    FormContactComponent,
    DesplegableMenuComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonComponent,
    InfoCardComponent,
    DescriptionItemComponent,
    UserCardComponent,
    FormContactComponent,
    DesplegableMenuComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ButtonComponent } from './components/button/button.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { MenuComponent } from './components/menu/menu.component';
import { ItemNavBarComponent } from './components/item-nav-bar/item-nav-bar.component';


@NgModule({
  declarations: [
    ButtonComponent,
    InfoCardComponent,
    MenuComponent,
    ItemNavBarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    ButtonComponent,
    InfoCardComponent
  ]
})
export class SharedModule { }

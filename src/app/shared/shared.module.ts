import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ButtonComponent } from './components/button/button.component';
import { InfoCardComponent } from './components/info-card/info-card.component';


@NgModule({
  declarations: [
    ButtonComponent,
    InfoCardComponent
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

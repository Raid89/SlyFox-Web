import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './pages/main/main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class MainModule { }

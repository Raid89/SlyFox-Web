import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { MenuComponent } from 'src/app/shared/components/menu/menu.component';

const routes: Routes = [

  { 
    path: '', 
    component: MenuComponent,
    children: [
      { path: '', component: MainComponent }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

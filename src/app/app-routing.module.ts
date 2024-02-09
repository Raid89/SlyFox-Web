import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModule } from './modules/main/main.module';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  
  { 
    path: '',
    loadChildren: () => import('./modules/main/main.module').then(m => MainModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

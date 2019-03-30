import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaprincipalComponent } from './telaprincipal/telaprincipal.component';
import { TelacadastroComponent } from './telacadastro/telacadastro.component';

const routes: Routes = [
  {path:'', component: TelaprincipalComponent},
  {path:'cadastro', component: TelacadastroComponent} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaRoutingModule { }

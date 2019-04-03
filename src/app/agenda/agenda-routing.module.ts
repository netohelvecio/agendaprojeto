import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaprincipalComponent } from './telaprincipal/telaprincipal.component';
import { TelacadastroComponent } from './telacadastro/telacadastro.component';
import { TelalistaComponent } from './telalista/telalista.component';
import { TelaeditarComponent } from './telaeditar/telaeditar.component';

const routes: Routes = [
  {path:'', component: TelaprincipalComponent},
  {path:'cadastro', component: TelacadastroComponent},
  {path:'lista', component: TelalistaComponent},
  {path:'editar/:id', component: TelaeditarComponent} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda-routing.module';
import { GeralModule } from '../geral/geral.module';
import { TelaprincipalComponent } from './telaprincipal/telaprincipal.component';
import { TelacadastroComponent } from './telacadastro/telacadastro.component';

@NgModule({
  declarations: [
    TelaprincipalComponent,
    TelacadastroComponent
  ],

  
  imports: [
    GeralModule,
    AgendaRoutingModule
  ]
})
export class AgendaModule { }

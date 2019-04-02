import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda-routing.module';
import { GeralModule } from '../geral/geral.module';
import { TelaprincipalComponent } from './telaprincipal/telaprincipal.component';
import { TelacadastroComponent } from './telacadastro/telacadastro.component';
import { TelalistaComponent } from './telalista/telalista.component';
import { TelaeditarComponent } from './telaeditar/telaeditar.component';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  declarations: [
    TelaprincipalComponent,
    TelacadastroComponent,
    TelalistaComponent,
    TelaeditarComponent
  ],

  
  imports: [
    GeralModule,
    AgendaRoutingModule,
    BrMaskerModule
  ]
})
export class AgendaModule { }

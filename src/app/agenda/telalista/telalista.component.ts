import { Component, OnInit } from '@angular/core';
import { AgendaService, Contato } from '../agenda.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-telalista',
  templateUrl: './telalista.component.html',
  styleUrls: ['./telalista.component.scss'],
})
export class TelalistaComponent implements OnInit {
  arr_contatos: Contato[] = [];

  constructor(
    private agenda: AgendaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.carregarContatos();
  }

  navegarEdicao(){
    this.router.navigate(['agenda/editar']);

  }

  carregarContatos(){
    this.arr_contatos = this.agenda.getContatos();
  }

}

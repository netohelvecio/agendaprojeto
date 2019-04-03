import { Component, OnInit } from '@angular/core';
import { AgendaService, Contato } from '../agenda.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-telalista',
  templateUrl: './telalista.component.html',
  styleUrls: ['./telalista.component.scss'],
})
export class TelalistaComponent implements OnInit {
  arr_contatos: Contato[] = [];

  constructor(
    private agenda: AgendaService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.carregarContatos();
  }

  navegarEdicao(index){
    this.router.navigate(['agenda/editar', index.id]);
    //console.log(index.id);
  }

  carregarContatos(){
    this.arr_contatos = this.agenda.getContatos();
  }

}

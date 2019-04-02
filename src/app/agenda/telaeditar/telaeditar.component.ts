import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { AgendaService } from '../agenda.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-telaeditar',
  templateUrl: './telaeditar.component.html',
  styleUrls: ['./telaeditar.component.scss'],
})
export class TelaeditarComponent implements OnInit {

  index: any;

  constructor(private local:Location, agenda: AgendaService, private rota: ActivatedRoute) { 

  }

  ngOnInit() {
    this.index = this.rota.snapshot.paramMap.get('index');
  }

  voltar(){
    this.local.back();
  }

}

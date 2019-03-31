import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-telaeditar',
  templateUrl: './telaeditar.component.html',
  styleUrls: ['./telaeditar.component.scss'],
})
export class TelaeditarComponent implements OnInit {

  constructor(private local:Location, agenda: AgendaService) { }

  ngOnInit() {}

  voltar(){
    this.local.back();
  }

}

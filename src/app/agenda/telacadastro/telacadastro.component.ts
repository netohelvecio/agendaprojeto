import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-telacadastro',
  templateUrl: './telacadastro.component.html',
  styleUrls: ['./telacadastro.component.scss'],
})
export class TelacadastroComponent implements OnInit {

  constructor(private local:Location) { }

  ngOnInit() {}

  voltar(){
    this.local.back();
  }

}

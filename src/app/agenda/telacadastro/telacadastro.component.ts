import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { AgendaService, Contato } from '../agenda.service';

@Component({
  selector: 'app-telacadastro',
  templateUrl: './telacadastro.component.html',
  styleUrls: ['./telacadastro.component.scss'],
})
export class TelacadastroComponent implements OnInit {

  contato: any = {};
  agenda: AgendaService;

  constructor(private local:Location, agenda: AgendaService) {
    this.agenda = agenda;
  }

  ngOnInit() {}

  cadastrar(formulario){
    let nome_ = (formulario.value.nome);
    let telefone_ = (formulario.value.telefone);
    let email_ = (formulario.value.email);
    //let imagem;

    if(nome_ && telefone_ && email_ != ""){
      this.agenda.salvarContato({
        nome: nome_,
        telefone: telefone_,
        email: email_,
        imagem: 'https:picsum.photos/100/100?random',
      });

      alert('Contato Cadastrado');
      this.local.back();
    }else{
      alert("Preencha todos os campos")
    }
  }

  voltar(){
    this.local.back();
  }

  caputurarFoto(){

  }

}

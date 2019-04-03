import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { AgendaService } from '../agenda.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-telacadastro',
  templateUrl: './telacadastro.component.html',
  styleUrls: ['./telacadastro.component.scss'],
})
export class TelacadastroComponent implements OnInit {

  contato: any = {};
  agenda: AgendaService;

  constructor(private local:Location, agenda: AgendaService, private alertController: AlertController) {
    this.agenda = agenda;
  }

  ngOnInit() {}

  cadastrar(formulario){
    let id_ = (formulario.value.id);
    let nome_ = (formulario.value.nome);
    let telefone_ = (formulario.value.telefone);
    let email_ = (formulario.value.email);    
    //let imagem;

    if(nome_ && telefone_ && email_ != ""){
      this.agenda.salvarContato({
        id: id_,
        nome: nome_,
        telefone: telefone_,
        email: email_,
        imagem: 'https:picsum.photos/100/100?random',
      });
      this.cadastroNovamente();
    }else{
      this.camposVazios();
    }
  }

  voltar(){
    this.local.back();
  }

  caputurarFoto(){

  }

  async cadastroNovamente() {
    const alert = await this.alertController.create({
      header: 'Deseja fazer um novo cadastro?',
      buttons: [{
        text:'Sim',
        handler: () => {
          this.contato = {};
        }
      }, {
        text:'Não',
        handler: () => {
          this.local.back();
        }
      }]
    });

    await alert.present();
  }

  async camposVazios() {
    const alert = await this.alertController.create({
      header: 'Preencha todos os campos',
      buttons: ['OK']
    });

    await alert.present();
  }

}

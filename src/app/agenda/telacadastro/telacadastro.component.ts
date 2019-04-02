import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { AgendaService, Contato } from '../agenda.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-telacadastro',
  templateUrl: './telacadastro.component.html',
  styleUrls: ['./telacadastro.component.scss'],
})
export class TelacadastroComponent implements OnInit {

  contato: any = {};
  agenda: AgendaService;

  constructor(private local:Location, agenda: AgendaService, public alertController: AlertController) {
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
      this.presentAlert();
    }else{
      this.camposVazios();
    }
  }

  voltar(){
    this.local.back();
  }

  caputurarFoto(){

  }

  async presentAlert() {
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

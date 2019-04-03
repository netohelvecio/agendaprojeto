import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { AgendaService, Contato } from '../agenda.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-telaeditar',
  templateUrl: './telaeditar.component.html',
  styleUrls: ['./telaeditar.component.scss'],
})
export class TelaeditarComponent implements OnInit {

  index: any;
  contato: Contato;

  constructor(private local:Location, 
              private agenda: AgendaService, 
              private rota: ActivatedRoute,
              private alertController: AlertController) { }

  ngOnInit() {

    this.index = this.rota.snapshot.paramMap.get('id');
    //console.log(this.index);

    /*this.index = this.rota.queryParams.subscribe( parametros => {
      if (parametros['id']) {
        console.log(parametros);
      }
    });*/

    this.contato = this.agenda.getUmContato(this.index);
    //console.log(this.contato);
  }

  editar(formulario){
    let id_ = (formulario.value.id);
    let nome_ = (formulario.value.nome);
    let telefone_ = (formulario.value.telefone);
    let email_ = (formulario.value.email);    
    //let imagem;

    if(nome_ && telefone_ && email_ != ""){
      this.agenda.editarContato(id_, nome_, telefone_, email_);
      this.cadastroAtualizado();
    }else{
      this.camposVazios();
    }
  }

  excluir(formulario){
    let id_ = (formulario.value.id);

    this.excluirConfirma(id_);
  }

  async cadastroAtualizado() {
    const alert = await this.alertController.create({
      header: 'Contato Atualizado',
      buttons: [{
        text:'OK',
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

  voltar(){
    this.local.back();
  }

  async excluirConfirma(id) {
    const alert = await this.alertController.create({
      header: 'Deseja Excluir o Contato?',
      buttons: [{
        text:'Sim',
        handler: () => {
          this.agenda.excluirContato(id);
        }
      },{
        text:'Não',
        handler: () => {
          this.local.back();
        }
      }]
    });

    await alert.present();
  }

}

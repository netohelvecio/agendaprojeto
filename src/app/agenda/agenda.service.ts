import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private arr_contatos: Contato[] = [];

  constructor() {
    const temp = localStorage.getItem('contatos');
    this.arr_contatos = temp ? JSON.parse(temp) : [];
  }

  getContatos(): Contato[]{
    return this.arr_contatos;
  }

  salvarContato(contato: Contato){
    this.arr_contatos.push(contato);
    this.saveLocal();
  }

  private saveLocal(){
    localStorage.setItem('candidatos',JSON.stringify(this.arr_contatos));
  }
}

export class Contato{
  nome: string;
  telefone: string;
  email: string;
  imagem: string;

  constructor(nome: string, telefone: string, email: string, imagem: string){
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.imagem = imagem;
  }
}

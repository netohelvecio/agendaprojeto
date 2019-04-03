import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private arr_contatos: Contato[] = [];

  constructor() {
    const temp = localStorage.getItem('contato');
    this.arr_contatos = temp ? JSON.parse(temp) : [];
  }

  getContatos(): Contato[]{
    return this.arr_contatos;
  }

  getUmContato(posicao): Contato{
    return this.arr_contatos[posicao];
  }

  salvarContato(contato: Contato){
    this.arr_contatos.push(contato);
    this.saveLocal();
  }

  editarContato(id, nome, telefone, email){
    this.arr_contatos[id].nome = nome;
    this.arr_contatos[id].telefone = telefone;
    this.arr_contatos[id].email = email;
    this.saveLocal();
  }

  excluirContato(id){
    this.arr_contatos[id].nome = null;
    this.arr_contatos[id].telefone = null;
    this.arr_contatos[id].email = null;
    this.arr_contatos[id].imagem = null;
    this.saveLocal();
  }

  private saveLocal(){
    localStorage.setItem('contato',JSON.stringify(this.arr_contatos));
  }
}

export class Contato{
  id: number;
  nome: string;
  telefone: string;
  email: string;
  imagem: string;

  constructor(id:number, nome: string, telefone: string, email: string, imagem: string){
    this.id = id;
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.imagem = imagem;
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() nome: string;
  @Input() telefone: string;
  @Input() email: string;
  @Input() imagem: string;

  constructor() { }

  ngOnInit() {}

  getNome(): string{
    return this.nome;
  }

}

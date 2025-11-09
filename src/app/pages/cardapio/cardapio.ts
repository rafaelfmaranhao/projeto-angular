import { Component, Input } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Flashcards } from "../../components/flashcards/flashcards";
import { Card } from '../../model/card';

@Component({
  selector: 'app-cardapio',
  imports: [Header, Footer, Flashcards],
  templateUrl: './cardapio.html',
  styleUrl: './cardapio.css'
})
export class Cardapio {
  @Input() nome = '';
  @Input() preco = '';
  @Input() urlFoto = '';

  flashCard: Card[] = [
    {
      nome: 'DevStack Bacon',
      preco: 'R$ 32,90',
      descricao: 'Bacon crocante, queijo cheddar e molho especial',
      urlFoto: 'img/burger-1.jpg' 
    },
    {
      nome: 'Classic Debug',
      descricao: 'Hambúrguer duplo com molho secreto',
      preco: 'R$ 28,90',
      urlFoto: 'img/burger-2.jpg'
    }
  ]
}

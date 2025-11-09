import { Component, Input } from '@angular/core';
import { Flashcards } from "../flashcards/flashcards";
import { Card } from '../../model/card';

@Component({
  selector: 'app-flashcards-senior',
  imports: [Flashcards],
  templateUrl: './flashcards-senior.html',
  styleUrl: './flashcards-senior.css'
})
export class FlashcardsSenior {
  @Input() nome = '';
  @Input() preco = '';
  @Input() descricao = '';
  @Input() urlFoto = '';

  flashCardSenior: Card[] = [
    {
      nome: 'Full Stack Deluxe',
      descricao: 'Duplo de carne, bacon, cheddar, cebola caramelizada',
      preco: 'R$ 42.90',
      urlFoto: 'img/cardapio/burger-5.jpg'
    },
    {
      nome: 'API Gourmet',
      descricao: 'Blend especial, queijo brie, rúcula e geleia',
      preco: 'R$ 45.90',
      urlFoto: 'img/cardapio/burger-9.jpg'
    },
    {
      nome: 'Cloud Burger',
      descricao: 'Carne premium, queijos nobres e molho trufado',
      preco: 'R$ 48.90',
      urlFoto: 'img/cardapio/cloud-burger.jpg'
    },
    {
      nome: 'Enterprise Edition',
      descricao: 'O mais completo: 5 carnes, 5 queijos, bacon e extras',
      preco: 'R$ 55.90',
      urlFoto: 'img/cardapio/enterprise-burger.jpg'
    }
  ]
}

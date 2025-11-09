import { Component, Input } from '@angular/core';
import { Flashcards } from "../flashcards/flashcards";
import { Card } from '../../model/card';
import { FlashcardsSenior } from "../flashcards-senior/flashcards-senior";
import { FlashcardsPleno } from "../flashcards-pleno/flashcards-pleno";

@Component({
  selector: 'app-cardapio-section',
  imports: [Flashcards, FlashcardsSenior, FlashcardsPleno],
  templateUrl: './cardapio-section.html',
  styleUrl: './cardapio-section.css'
})
export class CardapioSection {
  @Input() nome = '';
  @Input() preco = '';
  @Input() urlFoto = '';

  flashCardJunior: Card[] = [
    {
      nome: 'DevStack Bacon',
      preco: 'R$ 32,90',
      descricao: 'Bacon crocante, queijo cheddar e molho especial',
      urlFoto: 'img/cardapio/burger-1.jpg' 
    },
    {
      nome: 'Classic Debug',
      descricao: 'Hambúrguer duplo com molho secreto',
      preco: 'R$ 28,90',
      urlFoto: 'img/cardapio/burger-2.jpg'
    },
    {
        nome: 'BBQ.js Burguer',
      descricao: 'Bacon, onion rings e molho BBQ defumado',
      preco: 'R$ 35.90',
      urlFoto: 'img/cardapio/burger-3.jpg'
    },
    {
      nome: 'Spicy Exception',
      descricao: 'Frango empanado, jalapeños e queijo pepper jack',
      preco: 'R$ 30.90',
      urlFoto: 'img/cardapio/burger-4.jpg'
    }
  ];
}

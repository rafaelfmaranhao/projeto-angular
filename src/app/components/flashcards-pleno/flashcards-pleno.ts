import { Component, Input } from '@angular/core';
import { Flashcards } from "../flashcards/flashcards";
import { Card } from '../../model/card';

@Component({
  selector: 'app-flashcards-pleno',
  imports: [Flashcards],
  templateUrl: './flashcards-pleno.html',
  styleUrl: './flashcards-pleno.css'
})
export class FlashcardsPleno {
  @Input() nome = '';
  @Input() preco = '';
  @Input() descricao = '';
  @Input() urlFoto = '';

  flashCardPleno: Card[] = [
    {
      nome: 'Green Code',
      descricao: 'Hambúrguer vegano de grão de bico e quinoa',
      preco: 'R$ 27.90',
      urlFoto: 'img/cardapio/veg-burger-1.jpg'
    },
    {
      nome: 'Plant Stack',
      descricao: 'Blend vegetal com queijo vegano e molho especial',
      preco: 'R$ 29.90',
      urlFoto: 'img/cardapio/veg-burger-2.jpg'
    },
    {
      nome: 'Eco Dev',
      descricao: 'Portobello grelhado com queijo e vegetais',
      preco: 'R$ 31.90',
      urlFoto: 'img/cardapio/veg-burger-3.jpg'
    },
    {
      nome: 'Zero Meat',
      descricao: 'Hambúrguer de soja premium com guacamole',
      preco: 'R$ 33.90',
      urlFoto: 'img/cardapio/veg-burger-4.jpg'
    }
  ];
}

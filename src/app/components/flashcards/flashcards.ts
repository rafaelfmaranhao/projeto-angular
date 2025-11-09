import { Component, Input } from '@angular/core';
import { Btn } from "../btn/btn";

@Component({
  selector: 'app-flashcards',
  imports: [Btn],
  templateUrl: './flashcards.html',
  styleUrl: './flashcards.css'
})
export class Flashcards {
  @Input() nome = '';
  @Input() preco = '';
  @Input() descricao = '';
  @Input() urlFoto = '';
}

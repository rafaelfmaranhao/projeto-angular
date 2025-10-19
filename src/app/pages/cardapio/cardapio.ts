import { Component } from '@angular/core';
import { Itens } from '../../components/itens/itens';
import { Header } from "../../components/header/header";

@Component({
  selector: 'app-cardapio',
  imports: [Itens, Header],
  templateUrl: './cardapio.html',
  styleUrl: './cardapio.css'
})
export class Cardapio {
  
}

import { Component } from '@angular/core';
import { Itens } from '../../components/itens/itens';
import { Header } from "../../components/header/header";

@Component({
  selector: 'app-home',
  imports: [Header],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  index = 0;
  total = 3; // número de imagens

  moverSlide(direcao: number) {
    this.index = (this.index + direcao + this.total) % this.total;
  }

  getTransform() {
    return `translateX(${-this.index * 100}%)`;
  }
}

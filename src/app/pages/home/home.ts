import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Slides } from '../../components/slides/slides';
import { Hero } from '../../components/hero/hero';
import { FrasesSlider } from "../../components/frases-slider/frases-slider";
import { Flashcards } from '../../components/flashcards/flashcards';

@Component({
  selector: 'app-home',
  imports: [Header, Slides, Hero, FrasesSlider,Flashcards],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
}

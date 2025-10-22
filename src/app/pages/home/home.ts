import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Slides } from '../../components/slides/slides';
import { Hero } from '../../components/hero/hero';

@Component({
  selector: 'app-home',
  imports: [Header, Slides, Hero],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
}

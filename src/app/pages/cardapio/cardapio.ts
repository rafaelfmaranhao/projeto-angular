import { Component, Input } from '@angular/core';
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Flashcards } from "../../components/flashcards/flashcards";
import { Card } from '../../model/card';
import { LucideAngularModule } from 'lucide-angular';
import { CardapioSection } from "../../components/cardapio-section/cardapio-section";

@Component({
  selector: 'app-cardapio',
  imports: [Header, Footer, LucideAngularModule, CardapioSection],
  templateUrl: './cardapio.html',
  styleUrl: './cardapio.css'
})
export class Cardapio {

}

import { Component } from '@angular/core';
import { Listagem } from './pages/listagem/listagem';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Listagem, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}

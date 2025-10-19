import { Component, NgModule } from '@angular/core';
import { Ytd } from './components/ytd/ytd';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Ytd],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}

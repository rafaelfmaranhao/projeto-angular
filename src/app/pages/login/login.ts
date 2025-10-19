import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Cardapio } from '../cardapio/cardapio';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  usuario = 'admin';
  senha = '123';
}

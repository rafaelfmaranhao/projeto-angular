import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Logomarca } from '../logomarca/logomarca';

@Component({
  selector: 'app-header',
  imports: [RouterLink, Logomarca],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  nomeUsuario = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    const usuario = JSON.parse(localStorage.getItem('usuarioLogado') || '{}');

    if (!usuario.nomeUsuario) {
      this.nomeUsuario = 'Visitante';
    }
    this.nomeUsuario = usuario.nomeUsuario;
  }

  deslogar() {
    this.auth.deslogar();
  }
}

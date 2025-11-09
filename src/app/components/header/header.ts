import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Logomarca } from '../logomarca/logomarca';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [RouterLink, Logomarca, LucideAngularModule],
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
    } else {
      this.nomeUsuario = usuario.nomeUsuario;
    }
  }

  deslogar() {
    this.auth.deslogar();
  }
}

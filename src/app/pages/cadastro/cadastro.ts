import { Component } from '@angular/core';
import { Logomarca } from "../../components/logomarca/logomarca";
import { Btn } from '../../components/btn/btn';
import { BtnInfo } from '../../model/btn';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-cadastro',
  imports: [Logomarca, Btn, FormsModule, LucideAngularModule, RouterLink],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class Cadastro {
  nomeUsuario = '';
  senha = '';
  mensagem = '';

  constructor(private auth: AuthService, private router: Router) {}

  cadastrar() {
    const resultado = this.auth.cadastrar({ nomeUsuario: this.nomeUsuario, senha: this.senha });
    this.mensagem = resultado.message;

    if (resultado.success) {
      setTimeout(() => this.router.navigate(['/login']), 1500);
    }
  }

  btnInfo: BtnInfo[] = [
    {
      tipo: 'button',
      valor: 'Voltar ao Login',
      link: '/login'
    }
  ]
}

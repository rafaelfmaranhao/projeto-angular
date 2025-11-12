import { Component } from '@angular/core';
import { Logomarca } from "../../components/logomarca/logomarca";
import { Btn } from '../../components/btn/btn';
import { BtnInfo } from '../../model/btn';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-login',
  imports: [Logomarca, Btn, FormsModule, LucideAngularModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  nomeUsuario = '';
  senha = '';
  mensagem = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    const result = this.auth.login({ nomeUsuario: this.nomeUsuario, senha: this.senha });

    if (result.success) {
      this.router.navigate(['/']);
    } else {
      this.mensagem = result.message || 'Erro no login!';
    }
  }

  btnInfo: BtnInfo[] = [
    {
      tipo: 'button',
      valor: 'Cadastrar-se',
      link: '/cadastro'
    }
  ]
}

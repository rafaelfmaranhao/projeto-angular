import { Home } from './pages/home/home';
import { Cardapio } from './pages/cardapio/cardapio';
import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Redefinir } from './pages/redefinir/redefinir';
import { Cadastro } from './pages/cadastro/cadastro';
import { Sobre } from './pages/sobre/sobre';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'cardapio', component: Cardapio },
    { path: 'login', component: Login },
    { path: 'cadastro', component: Cadastro },
    { path: 'redefinir', component: Redefinir },
    { path: 'sobre', component: Sobre }
];
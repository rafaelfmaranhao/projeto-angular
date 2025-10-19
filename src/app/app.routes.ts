import { Cardapio } from './pages/cardapio/cardapio';
import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Redefinir } from './pages/redefinir/redefinir';

export const routes: Routes = [
    { path: 'cardapio', component: Cardapio },
    { path: '', component: Login},
    { path: 'redefinir', component: Redefinir}
];
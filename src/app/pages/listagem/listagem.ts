import { Component } from '@angular/core';
import { Usuario } from '../../components/usuario/usuario';
import { Header } from "../../components/header/header";

@Component({
  selector: 'app-listagem',
  imports: [Usuario, Header],
  templateUrl: './listagem.html',
  styleUrl: './listagem.css'
})
export class Listagem {
  
}

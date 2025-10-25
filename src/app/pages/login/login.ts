import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Logomarca } from "../../components/logomarca/logomarca";

@Component({
  selector: 'app-login',
  imports: [RouterLink, Logomarca],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  usuario = 'admin';
  senha = '123';
}

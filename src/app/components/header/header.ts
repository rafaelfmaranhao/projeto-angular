import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Logomarca } from '../logomarca/logomarca';

@Component({
  selector: 'app-header',
  imports: [RouterLink, Logomarca],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}

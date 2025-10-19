import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-itens',
  imports: [FormsModule, CommonModule],
  templateUrl: './itens.html',
  styleUrl: './itens.css'
})
export class Itens {
  usuario: string = 'Rafael Maranhão';

  constructor() { }
}

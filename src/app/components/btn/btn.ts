import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-btn',
  imports: [RouterLink],
  templateUrl: './btn.html',
  styleUrl: './btn.css'
})

export class Btn {
  @Input() tipo = '';
  @Input() valor = '';
  @Input() link = '';
}

import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Logomarca } from "../logomarca/logomarca";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule, Logomarca, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

}

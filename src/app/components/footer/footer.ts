import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Logomarca } from "../logomarca/logomarca";

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule, Logomarca],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

}

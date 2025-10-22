import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Header } from "../../components/header/header";

@Component({
  selector: 'app-home',
  imports: [Header],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements AfterViewInit, OnDestroy {
  private count = 1;
  private intervalId: any;

  ngAfterViewInit(): void {
    // marca o primeiro rádio se existir
    const first = document.getElementById('radio1') as HTMLInputElement | null;
    if (first) { first.checked = true; }

    // inicia autoplay (ajuste o tempo conforme desejar)
    this.intervalId = setInterval(() => this.nextImage(), 4000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) { clearInterval(this.intervalId); }
  }

  private nextImage(): void {
    this.count++;
    if (this.count > 4) { this.count = 1; }
    const radio = document.getElementById('radio' + this.count) as HTMLInputElement | null;
    if (radio) { radio.checked = true; }
  }
}

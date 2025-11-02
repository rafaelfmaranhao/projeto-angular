import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-frases-slider',
  imports: [CommonModule],
  templateUrl: './frases-slider.html',
  styleUrl: './frases-slider.css'
})
export class FrasesSlider implements OnInit, OnDestroy {
  frases: string[] = [
    '🍔 Bem-vindo à devBurguer',
    '😋 Onde o sabor é compilado com perfeição!',
    '💻 Conecte-se com o sabor.',
    '🔥 Experimente. Compile. Saboreie.',
  ];

  indiceAtual = 0;
  intervalo!: ReturnType<typeof setInterval>;
  animationClass = 'animate__fadeInRight';
  delay = 4000;

  ngOnInit() {
    this.iniciarAutoPlay();
  }

  ngOnDestroy() {
    this.pararAutoPlay();
  }

  iniciarAutoPlay() {
    this.intervalo = setInterval(() => {
      this.proximo();
    }, this.delay);
  }

  pararAutoPlay() {
    clearInterval(this.intervalo);
  }

  pause() {
    this.pararAutoPlay();
  }

  resume() {
    this.iniciarAutoPlay();
  }

  proximo() {
    this.animarTroca(() => {
      this.indiceAtual = (this.indiceAtual + 1) % this.frases.length;
    });
  }

  anterior() {
    this.animarTroca(() => {
      this.indiceAtual = (this.indiceAtual - 1 + this.frases.length) % this.frases.length;
    });
  }

  irPara(index: number) {
    this.animarTroca(() => {
      this.indiceAtual = index;
    });
  }

  private animarTroca(callback: () => void) {
    // saída
    this.animationClass = 'animate__fadeOutLeft';
    setTimeout(() => {
      callback();
      // entrada
      this.animationClass = 'animate__fadeInRight';
    }, 400);
  }
}

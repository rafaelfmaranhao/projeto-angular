import { Component } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ytd',
  imports: [CommonModule, FormsModule],
  templateUrl: './ytd.html',
  styleUrl: './ytd.css',
})
export class Ytd {
  videoUrl = '';
  videoInfo: any = null;

  constructor(private videoService: VideoService) {}

  buscar() {

    this.videoService.getVideoInfo(this.videoUrl).subscribe({
      next: data => this.videoInfo = data,
      error: err => alert('Erro: ' + err.message)
    });
    
  }
}

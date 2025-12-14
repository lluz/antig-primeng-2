import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-my-card',
  standalone: true,
  imports: [CommonModule, CardModule],
  host: {
    class: 'my-card'
  },
  templateUrl: './my-card.html',
})
export class MyCardnComponent {
}
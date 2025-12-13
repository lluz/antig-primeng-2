import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-page2',
  imports: [RouterLink, ButtonModule],
  templateUrl: './page2.html',
  styleUrl: './page2.css',
})
export class Page2 {
}

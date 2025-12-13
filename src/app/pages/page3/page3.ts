import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-page3',
  imports: [ButtonModule, RouterLink],
  templateUrl: './page3.html',
  styleUrl: './page3.css',
})
export class Page3 {

}

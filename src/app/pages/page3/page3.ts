import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-page3',
  imports: [ButtonModule, RouterLink],
  styleUrl: './page3.css',
  template: `
    <h1 class="text-3xl font-bold underline">
      Hello world!
      <p-button label="Back to Home" icon="pi pi-arrow-left" routerLink="/" severity="secondary" />
    </h1>
  `,
})
export class Page3 {

}

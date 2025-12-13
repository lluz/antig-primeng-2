import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ButtonModule],
  styleUrl: './home.css',
  template: `
    <div class="card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
      <h2 class="text-3xl font-bold mb-4">Home Page</h2>
      <p class="mb-4 text-gray-600 dark:text-gray-300">This is the main content area for the home page.</p>
      <div class="flex gap-2">
          <p-button label="Go to Page 2" icon="pi pi-arrow-right" iconPos="right" routerLink="/page2" />
          <p-button label="Go to Page 3" icon="pi pi-external-link" severity="info" routerLink="/page3" />
      </div>
    </div>
  `,
})
export class Home {
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ButtonModule, CardModule],
  styleUrl: './home.css',
  template: `
    <div class="card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
      <h2 class="text-3xl font-bold mb-4">Home Page</h2>
      <p class="mb-4 text-gray-600 dark:text-gray-300">a Tailwind card with PrimeNG buttons inside.</p>
      <div class="flex gap-2">
          <p-button label="Go to Page 2" icon="pi pi-arrow-right" iconPos="right" routerLink="/page2" />
          <p-button label="Go to Page 3" icon="pi pi-external-link" severity="info" routerLink="/page3" />
      </div>
    </div>

    <p-card header="Dashboard Overview (Page 1)" styleClass="shadow-lg">
      <div class="flex flex-col gap-4">
        <p class="text-brand-500 m-0">
          a p-card with Tailwind classes in the content area.
        </p>

        <div class="bg-brand-50 p-4 rounded-lg border border-brand-500/20">
          <h3 class="font-semibold text-brand-900">Status</h3>
          <p class="text-brand-600">All systems operational.</p>
        </div>

        <div class="flex justify-end mt-4">
          <p-button 
            label="Go to Details (Page 2)" 
            icon="pi pi-arrow-right" 
            iconPos="right" 
            routerLink="/page2" 
          />
        </div>
      </div>
    </p-card>
  `,
})
export class Home {
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ShellRegular } from '../../components/shells/shell-regular';

@Component({
  selector: 'app-page2',
  imports: [RouterLink, ButtonModule, CardModule, ShellRegular],
  styleUrl: './page2.css',
  template: `
    <app-shell-regular>

      <div class="card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">

        <h1 class="text-3xl font-bold underline">
            Hello world!
        </h1>
        <h2 class="text-3xl font-bold mb-4">Page 2</h2>
        <p class="mb-4 text-gray-600 dark:text-gray-300">This is the second page content area.</p>
        <div class="mb-4 flex items-center gap-2">
            <i class="pi pi-star-fill text-yellow-500 text-2xl"></i>
            <span>Here is a PrimeIcon!</span>
        </div>
        <p-button label="Back to Home" icon="pi pi-arrow-left" routerLink="/" severity="secondary" />

      </div>

      <p-card header="Detailed Reports (Page 2)" styleClass="shadow-lg border-t-4 border-brand-500">
        <div class="flex flex-col gap-4">
          <p class="text-surface-600 m-0">
            You are now viewing the detailed reports section.
          </p>

          <div class="grid grid-cols-2 gap-4">
              <div class="bg-surface-100 p-4 rounded text-center">
                  <span class="block text-2xl font-bold text-surface-900">42</span>
                  <span class="text-sm text-surface-500">Active Items</span>
              </div>
              <div class="bg-surface-100 p-4 rounded text-center">
                  <span class="block text-2xl font-bold text-surface-900">12ms</span>
                  <span class="text-sm text-surface-500">Latency</span>
              </div>
          </div>

          <div class="flex justify-start mt-4">
            <p-button 
              label="Back to Home" 
              icon="pi pi-arrow-left" 
              outlined="true"
              routerLink="/" 
            />
          </div>
        </div>
      </p-card>

  </app-shell-regular>
  `,
})
export class Page2 {
}

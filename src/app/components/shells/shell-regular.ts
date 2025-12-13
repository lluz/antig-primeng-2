import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-shell-regular',
  imports: [ToolbarModule],
  styleUrl: './shell-regular.css',
  template: `
    <div class="min-h-screen flex flex-col bg-green-950">
      
      <p-toolbar styleClass="bg-brand-900 border-none rounded-none px-6 py-4">
        <ng-template pTemplate="start">
          <div class="flex items-center gap-2">
            <i class="pi pi-box text-brand-50 text-2xl"></i>
            <span class="text-xl font-bold text-brand-50">MyApp</span>
          </div>
        </ng-template>
      </p-toolbar>

      <main class="flex-1 p-6 max-w-4xl mx-auto w-full">
         <ng-content></ng-content>
      </main>

      <footer class="bg-surface-200 border-t border-surface-300 p-4 text-center">
        <p class="text-surface-600 text-sm">
          © 2025 Enterprise Dashboard. Powered by Angular & PrimeNG.
        </p>
      </footer>
      
    </div>
  `,
})
export class ShellRegular {
}

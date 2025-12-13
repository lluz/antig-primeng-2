import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ShellRegular } from '../../components/shells/shell-regular';
import { MyButtonComponent } from '../../components/molecules/buttons/my-button';

@Component({
  selector: 'app-page3',
  imports: [ButtonModule, RouterLink, ShellRegular, MyButtonComponent],
  styleUrl: './page3.css',
  template: `
    <app-shell-regular>

      <h1 class="text-3xl font-bold underline">
        Hello world!
        <p-button label="Back to Home" icon="pi pi-arrow-left" routerLink="/" severity="secondary" />
      </h1>

      <div class="flex gap-4 p-4">
      
        <app-my-button 
          label="Save Changes" 
          icon="pi pi-check" 
          (action)="onSave()" 
        />

        <app-my-button 
          label="Delete" 
          icon="pi pi-trash" 
          variant="danger" 
          [isOutlined]="true"
          (action)="onDelete()" 
        />

      </div>

    </app-shell-regular>
  `,
})
export class Page3 {

  onSave() {
    console.log('Save button clicked');
  }

  onDelete() {
    console.log('Delete button clicked');
  }

}

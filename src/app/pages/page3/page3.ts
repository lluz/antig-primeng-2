import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ShellRegular } from '../../components/shells/shell-regular';
import { MyButtonComponent } from '../../components/molecules/buttons/my-button';

@Component({
  selector: 'app-page3',
  imports: [ButtonModule, RouterLink, ShellRegular, MyButtonComponent, CardModule],
  styleUrl: './page3.css',
  template: `
    <app-shell-regular>

      <h1 class="text-3xl font-bold underline">
        Hello world!
        <p-button label="Back to Home" icon="pi pi-arrow-left" routerLink="/" severity="secondary" />
      </h1>

      <div class="flex gap-4 p-4">
        <p>
          the next card shows that if you put a custom component 'app-my-button'
          inside a p-card component, the custom component 
          will know that it is inside a 'p-card' component and apply override styles 
          to itself (using TailwindCSS) e.g. 'rotate-45'.
        </p>
        <p>
          ... even when similar Global override styles are already applied to the 'p-button' component, via app's styles.css.
        </p>
      </div>

      <p-card class="flex gap-4 p-4">
      
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

      </p-card>

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

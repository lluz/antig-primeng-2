import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ShellRegular } from '../../components/shells/shell-regular';
import { MyButtonComponent } from '../../components/molecules/buttons/my-button';
import { MyCardnComponent } from "../../components/compounds/my-card";

@Component({
  selector: 'app-page3',
  imports: [ButtonModule, RouterLink, ShellRegular, MyButtonComponent, CardModule, MyCardnComponent],
  styleUrl: './page3.css',
  template: `
    <app-shell-regular>

      <h1 class="text-3xl font-bold underline">
        Hello world!
        <p-button label="Back to Home" icon="pi pi-arrow-left" routerLink="/" severity="secondary" />
      </h1>

      <div>
        <app-my-button 
          label="button" 
          icon="pi pi-external-link" 
        />
      </div>



      <div class="flex gap-4 p-4">
        <p>
          the next card shows that if you put a custom component 'app-my-button'
          inside a custom 'app-my-card' component ... you get the override possibility.
        </p>
      </div>


      <app-my-card class="flex-1 gap-4 p-4">

        <div>
      
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

        <div class="my-very-very-specific-class">
        
          <app-my-button 
            label="button" 
          />

        </div>

      </app-my-card>

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

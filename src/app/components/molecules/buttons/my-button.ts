import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  host: {
    class: 'my-button'
  },
  templateUrl: './my-button.html',
})
export class MyButtonComponent {
  // 1. Basic configuration inputs
  @Input() label: string = 'Button';
  @Input() icon: string = '';

  // 2. Styling inputs (defaults set here)
  @Input() variant: 'primary' | 'secondary' | 'danger' | 'success' = 'primary';
  @Input() isOutlined: boolean = false;

  // 3. Custom Output (Optional: usually native (click) bubbles up, 
  //    but this is useful if you want to intercept the event first)
  @Output() action = new EventEmitter<void>();

  handleClick(event: Event) {
    // You could add logic here (e.g., logging, analytics) before emitting
    this.action.emit();
  }

}
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `

    <!-- 
      style logic: "If I am inside an element with class .p-card, rotate me 90 degrees"
      
      Pure CSS Output: Tailwind compiles this into a standard CSS rule roughly looking like: .p-card .p-button-custom-class { rotate: 90deg; }. Browsers understand this perfectly.

      No Encapsulation Issues: Since the class is added directly to the p-button (via styleClass), it sits in the global scope (or works through boundaries) more reliably than Angular's :host emulation.

      Zero CSS Files: You keep the logic right where the component is defined.
    -->

    <p-button 
      [label]="label" 
      [icon]="icon" 
      [severity]="variant"
      [outlined]="isOutlined"
      (onClick)="handleClick($event)"

      styleClass="[.p-card_&]:rotate-45 transition-transform duration-300"
    />
  `
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
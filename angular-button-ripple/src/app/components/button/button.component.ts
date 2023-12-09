import { Component, ElementRef, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

type ColorTypes = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'success' | 'danger' | 'warning' | 'info' |
                  'primary-outline' | 'secondary-outline' | 'tertiary-outline' | 'quaternary-outline' | 'success-outline' | 'danger-outline' | 'warning-outline' | 'info-outline';
@Component({
  selector: 'p-button',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  host: {'(click)': 'ripple($event)'},
})
export class ButtonComponent {
  
  @HostBinding('class') @Input() color: ColorTypes = 'primary';
  @HostBinding('class.outline') @Input() outline: boolean = true;

  public ripple(event: any) {
    const button = event.currentTarget;
    
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }
}

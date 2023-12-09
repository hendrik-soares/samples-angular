import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  providers: [AppService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  constructor(
    private readonly service: AppService,
  ) {
    effect(() => {
      console.log(`The current count is: ${this.count()}`);
    });
  }

  readonly count = this.service.select('count');

  updated() {
    const notification = new Notification("To do list", { body: 'text' });
    this.service.set('count', this.count() + 1);
  }
}

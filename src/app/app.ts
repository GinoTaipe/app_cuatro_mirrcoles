import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonaComponent } from './components/persona-component/persona-component';

@Component({
  imports: [RouterOutlet, PersonaComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('app_cuatro');
}

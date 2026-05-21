import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styles: [`
    :host { display: contents; }
    .btn {
      padding: 0.7rem 1.8rem; font-family: 'JetBrains Mono', monospace;
      font-size: 0.65rem; letter-spacing: 0.14em; text-transform: uppercase;
      border: 1px solid var(--accent); background: transparent;
      color: var(--text); text-decoration: none; display: inline-block;
      transition: background 0.2s, color 0.2s; cursor: pointer;
    }
    .btn:hover, .btn-fill { background: var(--accent); color: var(--bg); }
    .btn-fill { background: var(--accent); color: var(--bg); }
    .photo-ring { transition: border-color 0.3s, box-shadow 0.3s; }
  `]
})
export class HomeComponent {}

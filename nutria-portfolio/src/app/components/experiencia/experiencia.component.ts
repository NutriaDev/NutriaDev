import { Component } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  templateUrl: './experiencia.component.html',
  styles: [`
    :host { display: contents; }
    .section-tag {
      display: block; font-size: 0.65rem; letter-spacing: 0.22em;
      text-transform: uppercase; color: var(--accent); margin-bottom: 0.8rem;
    }
    .section-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(2rem, 4vw, 2.8rem); font-weight: 300; line-height: 1.1;
    }
    .section-rule {
      width: 48px; height: 1px; background: var(--accent); margin-top: 1.4rem;
    }
    .section-header { margin-bottom: 4rem; }

    .timeline { position: relative; padding-left: 2rem; }
    .timeline::before {
      content: ''; position: absolute; left: 0; top: 0; bottom: 0;
      width: 1px; background: var(--border);
    }
    .tl-item {
      position: relative; padding: 0 0 3.5rem 2.5rem;
    }
    .tl-item::before {
      content: ''; position: absolute; left: -5px; top: 7px;
      width: 9px; height: 9px; border: 1px solid var(--accent);
      background: var(--bg); transform: rotate(45deg);
    }
    .tl-date {
      font-size: 0.62rem; letter-spacing: 0.14em; color: var(--accent);
      text-transform: uppercase; margin-bottom: 0.5rem;
    }
    .tl-company {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.5rem; font-weight: 400; margin-bottom: 0.3rem;
    }
    .tl-role {
      font-size: 0.72rem; color: var(--text-dim);
      letter-spacing: 0.04em; margin-bottom: 1rem;
    }
    .tl-desc {
      font-size: 0.8rem; color: var(--text-dim);
      max-width: 580px; line-height: 1.75;
    }
  `]
})
export class ExperienciaComponent {}

import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <div class="footer-logo">
        <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
          <ellipse cx="14" cy="15" rx="11" ry="10" stroke="var(--accent)" stroke-width="1.4"/>
          <ellipse cx="10" cy="14" rx="2.2" ry="2.6" stroke="var(--accent)" stroke-width="1"/>
          <ellipse cx="18" cy="14" rx="2.2" ry="2.6" stroke="var(--accent)" stroke-width="1"/>
          <path d="M10.5 20 C12 22.5 16 22.5 17.5 20" stroke="var(--accent)" stroke-width="1" stroke-linecap="round"/>
        </svg>
        Hecho por <span>&nbsp;NutriaDev</span>&nbsp;· 2026
      </div>
      <p>Diana Arévalo · Full-Stack Developer · Colombia</p>
    </footer>
  `,
  styles: [`
    :host { display: contents; }
    footer {
      padding: 2rem 5rem; border-top: 1px solid var(--border);
      display: flex; justify-content: space-between; align-items: center;
    }
    footer p { font-size: 0.68rem; color: var(--text-dim); letter-spacing: 0.06em; }
    .footer-logo {
      display: flex; align-items: center; gap: 0.6rem;
      font-family: 'Cormorant Garamond', serif; font-size: 1rem; font-weight: 600;
      color: var(--text);
    }
    .footer-logo span { color: var(--accent); }
    @media (max-width: 900px) {
      footer { flex-direction: column; gap: 0.8rem; text-align: center; padding: 2rem 1.5rem; }
    }
  `]
})
export class FooterComponent {}

import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
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
    .footer-socials {
      display: flex; align-items: center; gap: 1.2rem;
    }
    .footer-socials a {
      color: var(--text-dim); transition: color 0.2s; display: flex;
    }
    .footer-socials a:hover { color: var(--accent); }
    @media (max-width: 900px) {
      footer { flex-direction: column; gap: 0.8rem; text-align: center; padding: 2rem 1.5rem; }
    }
  `]
})
export class FooterComponent {}

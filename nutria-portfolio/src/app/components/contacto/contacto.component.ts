import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  templateUrl: './contacto.component.html',
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

    .contact-grid {
      display: grid; grid-template-columns: 1fr 1.8fr;
      gap: 7rem; align-items: start;
    }
    .contact-left h3 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.5rem; font-weight: 300; line-height: 1.4; margin-bottom: 1.2rem;
    }
    .contact-left p { font-size: 0.8rem; color: var(--text-dim); line-height: 1.75; }
    .contact-detail {
      margin-top: 2rem; font-size: 0.68rem;
      letter-spacing: 0.06em; color: var(--accent);
    }
    .wa-section {
      margin-top: 2.5rem; padding-top: 2rem;
      border-top: 1px solid var(--border);
    }
    .wa-label {
      display: block; font-size: 0.6rem; letter-spacing: 0.18em;
      text-transform: uppercase; color: var(--text-dim); margin-bottom: 1rem;
    }
    .wa-btn {
      display: inline-flex; align-items: center; gap: 0.6rem;
      padding: 0.65rem 1.6rem;
      font-family: 'JetBrains Mono', monospace; font-size: 0.65rem;
      letter-spacing: 0.14em; text-transform: uppercase;
      border: 1px solid var(--border-strong); border-radius: 999px;
      background: transparent; color: var(--text-dim);
      text-decoration: none; cursor: pointer;
      transition: color 0.25s, background 0.25s, border-color 0.25s, box-shadow 0.25s;
    }
    .wa-btn:hover {
      color: var(--accent); border-color: var(--accent);
      background: var(--accent-glow);
      box-shadow: 0 0 20px var(--accent-glow);
    }
    .wa-btn svg { width: 16px; height: 16px; flex-shrink: 0; }
    form { display: flex; flex-direction: column; gap: 1.4rem; }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.4rem; }
    .form-group { display: flex; flex-direction: column; gap: 0.5rem; }
    label {
      font-size: 0.6rem; letter-spacing: 0.18em;
      text-transform: uppercase; color: var(--accent);
    }
    input, textarea {
      background: transparent; border: none;
      border-bottom: 1px solid var(--border);
      padding: 0.7rem 0; font-family: 'JetBrains Mono', monospace;
      font-size: 0.82rem; color: var(--text); outline: none;
      transition: border-color 0.2s; width: 100%;
    }
    input:focus, textarea:focus { border-bottom-color: var(--accent); }
    input::placeholder, textarea::placeholder { color: var(--text-dim); }
    textarea { resize: none; height: 90px; }
    .btn {
      padding: 0.7rem 1.8rem; font-family: 'JetBrains Mono', monospace;
      font-size: 0.65rem; letter-spacing: 0.14em; text-transform: uppercase;
      border: 1px solid var(--accent); background: transparent;
      color: var(--text); text-decoration: none; display: inline-block;
      transition: background 0.2s, color 0.2s; cursor: pointer;
    }
    .btn:hover, .btn-fill { background: var(--accent); color: var(--bg); }
    .btn-fill { background: var(--accent); color: var(--bg); }

    @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr; gap: 3rem; } }
  `]
})
export class ContactoComponent {}

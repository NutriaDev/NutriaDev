import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styles: [`
    nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 200;
      display: flex; align-items: center; justify-content: space-between;
      padding: 1.25rem 5rem;
      background: var(--bg); border-bottom: 1px solid var(--border);
      opacity: 0; animation: fadeDown 0.7s ease forwards 0.1s;
    }
    .nav-logo {
      display: flex; align-items: center; gap: 0.7rem;
      font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; font-weight: 600;
      color: var(--text); text-decoration: none; letter-spacing: 0.04em;
    }
    .nav-logo .logo-svg { width: 32px; height: 32px; flex-shrink: 0; }

    .nav-right { display: flex; align-items: center; gap: 1.5rem; }
    .nav-links { display: flex; gap: 2.5rem; list-style: none; }
    .nav-links a {
      color: var(--text-dim); text-decoration: none;
      font-size: 0.68rem; letter-spacing: 0.14em; text-transform: uppercase;
      transition: color 0.2s;
    }
    .nav-links a:hover { color: var(--accent); }
    .nav-links a.active { color: var(--accent); }
    .theme-btn {
      width: 40px; height: 22px; background: var(--accent-glow);
      border: 1px solid var(--border-strong); border-radius: 11px;
      cursor: pointer; position: relative; transition: background 0.3s;
    }
    .theme-btn::after {
      content: ''; position: absolute; top: 3px; left: 3px;
      width: 14px; height: 14px; background: var(--accent);
      border-radius: 50%; transition: transform 0.3s;
    }
    body.light .theme-btn::after { transform: translateX(18px); }
    .hamburger {
      display: none; flex-direction: column; gap: 4px;
      background: none; border: none; cursor: pointer; padding: 4px;
    }
    .hamburger span {
      display: block; width: 20px; height: 2px;
      background: var(--text-dim); border-radius: 2px;
      transition: transform 0.3s, opacity 0.3s;
    }
    .hamburger.active span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
    .hamburger.active span:nth-child(2) { opacity: 0; }
    .hamburger.active span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

    @media (max-width: 900px) {
      nav { padding: 1rem 1.5rem; }
      .hamburger { display: flex; }

      .backdrop {
        position: fixed; inset: 0; z-index: 98;
        background: rgba(0,0,0,0.5);
        opacity: 0; pointer-events: none;
        transition: opacity 0.3s ease;
      }
      .backdrop.show {
        opacity: 1; pointer-events: auto;
      }

      .nav-links {
        position: fixed; top: 0; left: 0; bottom: 0; z-index: 99;
        flex-direction: column; gap: 2rem;
        padding: 6rem 2.5rem 2rem;
        min-width: 220px;
        background: var(--surface);
        border-right: 1px solid var(--border);
        transform: translateX(-100%);
        transition: transform 0.3s ease;
        margin: 0;
      }
      .nav-links.open {
        transform: translateX(0);
      }
      .nav-links a { font-size: 0.85rem; }
    }
  `]
})
export class NavComponent {
  activeSection = 'home';
  menuOpen = false;

  ngOnInit() {
    const stored = localStorage.getItem('theme');
    if (stored === 'light') document.body.classList.add('light');
  }

  @HostListener('window:scroll')
  onScroll() {
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(s => {
      const section = s as HTMLElement;
      if (window.scrollY >= section.offsetTop - 140) current = s.id;
    });
    this.activeSection = current;
  }

  @HostListener('window:keydown.escape')
  onEscape() {
    this.menuOpen = false;
  }

  toggleTheme() {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  }
}

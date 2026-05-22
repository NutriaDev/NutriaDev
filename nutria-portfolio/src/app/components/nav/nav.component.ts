import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styles: [`
    :host { display: contents; }
  `]
})
export class NavComponent {
  activeSection = 'home';

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

  toggleTheme() {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  }
}

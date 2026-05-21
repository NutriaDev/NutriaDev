import { Component, AfterViewInit } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    HomeComponent,
    ProyectosComponent,
    ExperienciaComponent,
    TecnologiasComponent,
    ContactoComponent,
    FooterComponent
  ],
  template: `
    <app-nav></app-nav>
    <app-home></app-home>
    <app-proyectos></app-proyectos>
    <app-experiencia></app-experiencia>
    <app-tecnologias></app-tecnologias>
    <app-contacto></app-contacto>
    <app-footer></app-footer>
  `,
  styles: [`
    :host { display: contents; }
  `]
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    const revealEls = document.querySelectorAll('.reveal');
    const revealObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('vis');
      });
    }, { threshold: 0.1 });
    revealEls.forEach(el => revealObs.observe(el));
  }
}

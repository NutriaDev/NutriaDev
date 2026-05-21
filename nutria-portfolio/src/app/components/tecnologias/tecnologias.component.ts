import { Component } from '@angular/core';

interface TechGroup {
  name: string;
  items: string[];
}

@Component({
  selector: 'app-tecnologias',
  standalone: true,
  templateUrl: './tecnologias.component.html',
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

    .tech-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1px; background: var(--border);
      border: 1px solid var(--border);
    }
    .tech-group {
      background: var(--surface); padding: 2rem;
    }
    .tech-group-name {
      font-size: 0.62rem; letter-spacing: 0.2em; text-transform: uppercase;
      color: var(--accent); margin-bottom: 1.2rem;
      padding-bottom: 0.7rem; border-bottom: 1px solid var(--border);
    }
    .tech-item {
      font-size: 0.78rem; color: var(--text-dim);
      display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.45rem;
    }
    .tech-item::before {
      content: ''; flex-shrink: 0;
      width: 4px; height: 4px; background: var(--accent);
    }

    @media (max-width: 900px) { .tech-grid { grid-template-columns: 1fr 1fr; } }
  `]
})
export class TecnologiasComponent {
  techGroups: TechGroup[] = [
    { name: 'Frontend', items: ['Angular · React · Astro', 'TypeScript · JavaScript', 'HTML · CSS · SCSS', 'Tailwind CSS'] },
    { name: 'Backend', items: ['Java · Spring Boot', 'Spring Security · JWT', 'REST APIs · JUnit', 'Swagger / OpenAPI', 'Node.js · Express'] },
    { name: 'Bases de datos', items: ['PostgreSQL · MySQL', 'SQL Server · MongoDB'] },
    { name: 'Herramientas', items: ['Git · GitHub · GitFlow', 'Docker · Jenkins · CI/CD', 'Jira · ClickUp · Postman'] },
    { name: 'Arquitecturas', items: ['Microservicios', 'Arquitectura Limpia', 'Arquitectura Hexagonal', 'Separación de responsabilidades'] },
    { name: 'Cloud', items: ['AWS · Cloud Practitioner', 'Terraform (básico)'] },
  ];
}

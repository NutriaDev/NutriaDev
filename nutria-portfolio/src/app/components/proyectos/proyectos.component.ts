import { Component } from '@angular/core';

interface Project {
  num: string;
  category: string;
  name: string;
  desc: string;
  tags: string[];
  badge: string;
}

@Component({
  selector: 'app-proyectos',
  standalone: true,
  templateUrl: './proyectos.component.html',
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
    .proj-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.4rem;
    }
    .proj-card {
      background: var(--surface2);
      border: 1px solid var(--border);
      border-radius: 12px;
      overflow: hidden;
      display: flex; flex-direction: column;
      transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
      cursor: pointer;
    }
    .proj-card:hover {
      border-color: var(--accent);
      box-shadow: 0 0 28px var(--accent-glow), 0 4px 24px rgba(0,0,0,0.3);
      transform: translateY(-3px);
    }
    .proj-img {
      position: relative; aspect-ratio: 16/9;
      background: var(--bg); overflow: hidden;
      display: flex; align-items: center; justify-content: center;
    }
    .proj-img-placeholder {
      font-size: 0.68rem; color: var(--text-dim);
      letter-spacing: 0.06em; opacity: 0.4;
    }
    .proj-overlay {
      position: absolute; inset: 0;
      background: rgba(0,0,0,0.55);
      display: flex; align-items: center; justify-content: center;
      gap: 0.6rem;
      opacity: 0; transition: opacity 0.22s;
    }
    .proj-card:hover .proj-overlay { opacity: 1; }
    .proj-action {
      font-size: 0.6rem; letter-spacing: 0.1em; text-transform: uppercase;
      padding: 0.38rem 0.9rem; border: 1px solid var(--accent);
      color: var(--text); background: transparent;
      border-radius: 4px; cursor: pointer;
      transition: background 0.18s, color 0.18s; font-family: 'JetBrains Mono', monospace;
    }
    .proj-action:hover { background: var(--accent); color: var(--bg); }
    .proj-badge {
      position: absolute; bottom: 0.7rem; left: 0.7rem;
      font-size: 0.58rem; letter-spacing: 0.08em; text-transform: uppercase;
      padding: 0.28rem 0.7rem; border-radius: 4px;
      background: rgba(0,0,0,0.7); color: var(--accent);
      border: 1px solid var(--border-strong);
    }
    .proj-body {
      padding: 1.4rem 1.4rem 1.6rem;
      display: flex; flex-direction: column; flex: 1;
    }
    .proj-num {
      font-size: 0.58rem; letter-spacing: 0.2em; color: var(--text-dim);
      text-transform: uppercase; margin-bottom: 0.5rem;
    }
    .proj-name {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.55rem; font-weight: 600;
      color: var(--accent); margin-bottom: 0.7rem; line-height: 1.15;
    }
    .proj-desc {
      font-size: 0.78rem; color: var(--text-dim);
      line-height: 1.75; margin-bottom: 1.2rem; flex: 1;
    }
    .tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
    .tag {
      font-size: 0.58rem; padding: 0.28rem 0.75rem;
      border: 1px solid var(--border-strong);
      color: var(--text-dim); border-radius: 999px;
      letter-spacing: 0.06em;
      transition: border-color 0.18s, color 0.18s;
    }
    .proj-card:hover .tag { border-color: var(--accent); color: var(--text-mid); }
    @media (max-width: 1100px) { .proj-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 680px) { .proj-grid { grid-template-columns: 1fr; } }
  `]
})
export class ProyectosComponent {
  projects: Project[] = [
    { num: '01 — Educativo', category: 'Educativo', name: 'Hagwon School', desc: 'Plataforma educativa con API REST MERN. UX/UI con Tailwind CSS, visualización eficiente y experiencia de usuario fluida para estudiantes y docentes.', tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'], badge: 'Fullstack' },
    { num: '02 — Empresarial', category: 'Empresarial', name: 'Sistema Empresarial', desc: 'Aplicación a la medida con arquitectura hexagonal y microservicios. Spring Security, JWT, Swagger/OpenAPI, CI/CD y despliegue en AWS.', tags: ['Angular', 'Spring Boot', 'PostgreSQL', 'Docker', 'AWS'], badge: 'Enterprise' },
    { num: '03 — Branding', category: 'Branding', name: 'NutriaDev Site', desc: 'Portfolio personal con identidad visual propia. Animaciones SVG, tema oscuro/claro y arquitectura de componentes Angular escalable.', tags: ['Angular', 'SCSS', 'TypeScript', 'Anime.js'], badge: 'Landing' },
    { num: '04 — Backend', category: 'Backend', name: 'Gestión Inventario', desc: 'Sistema de gestión de inventario con Spring Boot y JWT. Roles de usuario, reportes con JasperReports y documentación Swagger.', tags: ['Spring Boot', 'MySQL', 'JWT', 'Swagger'], badge: 'API REST' },
    { num: '05 — App Móvil', category: 'App Móvil', name: 'App Flutter', desc: 'Aplicación móvil multiplataforma conectada a API REST. UI clean con Flutter y consumo de endpoints seguros con autenticación JWT.', tags: ['Flutter', 'Dart', 'REST API', 'Firebase'], badge: 'Mobile' },
    { num: '06 — Plataforma', category: 'Plataforma', name: 'Dashboard Admin', desc: 'Panel de administración empresarial con métricas en tiempo real, gestión de usuarios y módulos configurables por rol.', tags: ['Angular', 'Spring Boot', 'WebSocket', 'Docker'], badge: 'SaaS' },
  ];
}

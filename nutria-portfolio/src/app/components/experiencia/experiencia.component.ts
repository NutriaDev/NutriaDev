import { Component } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  template: `
    <section id="experiencia" class="min-h-screen px-20 py-28">
      <div class="section-header reveal mb-16">
        <span class="section-tag">// 03 — Experiencia</span>
        <h2 class="section-title">Trayectoria empresarial</h2>
        <div class="section-rule"></div>
      </div>

      <div class="timeline">
        <div class="tl-item reveal">
          <p class="tl-date">2023 — Presente</p>
          <h3 class="tl-company">SENA Colombia</h3>
          <p class="tl-role">Estudiante · Análisis y Desarrollo de Software</p>
          <p class="tl-desc">Formación en arquitecturas limpias, microservicios y desarrollo fullstack. Proyectos reales con enfoque empresarial, integrando metodologías ágiles desde el primer semestre.</p>
        </div>

        <div class="tl-item reveal">
          <p class="tl-date">2021 — Presente</p>
          <h3 class="tl-company">Proyectos Independientes</h3>
          <p class="tl-role">Full-Stack Developer · Autodidacta</p>
          <p class="tl-desc">3 años construyendo soluciones a la medida: plataformas educativas, sistemas de gestión empresarial y aplicaciones con identidad visual propia. Cada proyecto como una marca diferenciada.</p>
        </div>

        <div class="tl-item reveal">
          <p class="tl-date">Formación continua</p>
          <h3 class="tl-company">AWS Cloud Practitioner</h3>
          <p class="tl-role">Certificación en preparación · Cloud Computing</p>
          <p class="tl-desc">AWS fundamentos, preparación AWS Cloud Practitioner. Terraform básico. Enfoque en arquitecturas cloud para aplicaciones empresariales escalables.</p>
        </div>
      </div>
    </section>
  `,
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

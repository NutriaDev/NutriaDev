import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  template: `
    <section id="contacto" class="min-h-screen px-20 py-28">
      <div class="section-header reveal mb-16">
        <span class="section-tag">// 05 — Contacto</span>
        <h2 class="section-title">Hablemos de<br>tu proyecto</h2>
        <div class="section-rule"></div>
      </div>

      <div class="contact-grid reveal">
        <div class="contact-left">
          <h3>¿Tienes una idea de negocio que necesita una aplicación a la medida?</h3>
          <p>Convierto requerimientos empresariales en soluciones web robustas, escalables y con identidad visual propia. Cada proyecto es una marca.</p>
          <p class="contact-detail">Colombia · Disponible remotamente · Inglés / Español</p>
        </div>

        <form>
          <div class="form-row">
            <div class="form-group">
              <label>Nombre</label>
              <input type="text" placeholder="Tu nombre"/>
            </div>
            <div class="form-group">
              <label>Empresa</label>
              <input type="text" placeholder="Nombre de tu empresa"/>
            </div>
          </div>
          <div class="form-group">
            <label>Correo electrónico</label>
            <input type="email" placeholder="correo@empresa.com"/>
          </div>
          <div class="form-group">
            <label>Mensaje</label>
            <textarea placeholder="Cuéntame sobre tu proyecto..."></textarea>
          </div>
          <button class="btn btn-fill" type="submit" style="align-self:flex-start;">Enviar mensaje</button>
        </form>
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

import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="dashboard">
      <div class="dash-header">
        <div>
          <h1>Panel</h1>
          <div class="email">{{ email }}</div>
        </div>
        <div class="user-info">
          <div class="user-avatar">A</div>
          <button class="btn-logout" (click)="logout()">Salir</button>
        </div>
      </div>

      <div class="greeting">
        <h2>Bienvenido</h2>
        <p>Gestiona el contenido de tu portfolio</p>
      </div>

      <div class="grid">
        <div class="card" routerLink="/admin/proyectos">
          <div class="card-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
          </div>
          <h3>Proyectos</h3>
          <p>CRUD de proyectos</p>
        </div>
        <div class="card" routerLink="/admin/experiencia">
          <div class="card-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          </div>
          <h3>Experiencia</h3>
          <p>CRUD de experiencia</p>
        </div>
        <div class="card" routerLink="/admin/profile">
          <div class="card-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <h3>Perfil</h3>
          <p>Editar información</p>
        </div>
        <div class="card" routerLink="/admin/mensajes">
          <div class="card-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </div>
          <h3>Mensajes</h3>
          <p>Contacto recibido</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; min-height: 100vh; background: var(--bg); }
    .dashboard { max-width: 900px; margin: 0 auto; padding: 3rem 2rem; animation: fadeIn 0.6s ease; }
    .dash-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 3rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--border); }
    .dash-header h1 { font-size: 1.1rem; font-weight: 400; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text); }
    .dash-header .email { font-size: 0.7rem; color: var(--text-dim); margin-top: 0.2rem; }
    .user-info { display: flex; align-items: center; gap: 1rem; }
    .user-avatar { width: 36px; height: 36px; border-radius: 50%; background: var(--accent-glow); border: 1px solid var(--border-strong); display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: var(--accent); }
    .btn-logout { background: none; border: 1px solid var(--border); border-radius: 8px; padding: 0.5rem 1rem; color: var(--text-dim); font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; letter-spacing: 0.08em; text-transform: uppercase; cursor: pointer; transition: border 0.25s ease, color 0.25s ease; }
    .btn-logout:hover { border-color: var(--accent); color: var(--accent); }
    .greeting { margin-bottom: 2.5rem; animation: fadeUp 0.7s ease forwards; }
    .greeting h2 { font-size: 1.5rem; font-weight: 400; color: var(--text); margin-bottom: 0.3rem; }
    .greeting p { font-size: 0.8rem; color: var(--text-dim); }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem; }
    .card { background: var(--surface); border: 1px solid var(--border); border-radius: 14px; padding: 1.5rem; cursor: pointer; transition: border 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease; }
    .card:hover { border-color: var(--accent); box-shadow: 0 0 30px var(--accent-glow); transform: translateY(-2px); }
    .card-icon { width: 32px; height: 32px; border-radius: 8px; background: var(--accent-glow); display: flex; align-items: center; justify-content: center; margin-bottom: 0.75rem; color: var(--accent); }
    .card h3 { font-size: 0.8rem; font-weight: 400; letter-spacing: 0.06em; text-transform: uppercase; color: var(--text); margin-bottom: 0.25rem; }
    .card p { font-size: 0.7rem; color: var(--text-dim); }
  `]
})
export class AdminDashboardComponent {
  private auth = inject(AuthService);
  private router = inject(Router);
  email = this.auth.getSession()?.user?.email ?? '';

  async logout() {
    await this.auth.signOut();
    this.router.navigateByUrl('/admin-login');
  }
}

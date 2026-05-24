import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="min-h-screen" style="background: var(--bg)">
      <div class="max-w-[900px] mx-auto p-8" style="animation: fadeIn 0.6s ease">

        <!-- Header -->
        <div class="flex items-center justify-between pb-6 mb-12" style="border-bottom: 1px solid var(--border)">
          <div>
            <h1 class="text-lg tracking-widest uppercase" style="color: var(--text); font-weight: 400">Panel</h1>
            <div class="text-xs mt-1" style="color: var(--text-dim)">{{ email }}</div>
          </div>
          <div class="flex items-center gap-4">
            <div
              class="w-9 h-9 rounded-full flex items-center justify-center text-sm"
              style="background: var(--accent-glow); border: 1px solid var(--border-strong); color: var(--accent)"
            >
              A
            </div>
            <button
              class="btn-logout"
              (click)="logout()"
            >
              Salir
            </button>
          </div>
        </div>

        <!-- Greeting -->
        <div class="mb-10" style="animation: fadeUp 0.7s ease forwards">
          <h2 class="text-2xl font-light mb-1" style="color: var(--text)">Bienvenido</h2>
          <p class="text-sm" style="color: var(--text-dim)">Gestiona el contenido de tu portfolio</p>
        </div>

        <!-- Grid -->
        <div class="grid gap-4" style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))">
          <div class="admin-card" routerLink="/admin/proyectos">
            <div class="card-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
            </div>
            <h3 class="text-xs tracking-wider uppercase mb-1" style="color: var(--text); font-weight: 400">Proyectos</h3>
            <p class="text-[0.7rem]" style="color: var(--text-dim)">CRUD de proyectos</p>
          </div>

          <div class="admin-card" routerLink="/admin/experiencia">
            <div class="card-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            </div>
            <h3 class="text-xs tracking-wider uppercase mb-1" style="color: var(--text); font-weight: 400">Experiencia</h3>
            <p class="text-[0.7rem]" style="color: var(--text-dim)">CRUD de experiencia</p>
          </div>

          <div class="admin-card" routerLink="/admin/profile">
            <div class="card-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <h3 class="text-xs tracking-wider uppercase mb-1" style="color: var(--text); font-weight: 400">Perfil</h3>
            <p class="text-[0.7rem]" style="color: var(--text-dim)">Editar información</p>
          </div>

          <div class="admin-card" routerLink="/admin/mensajes">
            <div class="card-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <h3 class="text-xs tracking-wider uppercase mb-1" style="color: var(--text); font-weight: 400">Mensajes</h3>
            <p class="text-[0.7rem]" style="color: var(--text-dim)">Contacto recibido</p>
          </div>
        </div>

      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
    .btn-logout {
      background: none;
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 0.5rem 1rem;
      color: var(--text-dim);
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.7rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      cursor: pointer;
      transition: border 0.25s ease, color 0.25s ease;
    }
    .btn-logout:hover {
      border-color: var(--accent);
      color: var(--accent);
    }
    .admin-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 1.5rem;
      cursor: pointer;
      transition: border 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
    }
    .admin-card:hover {
      border-color: var(--accent);
      box-shadow: 0 0 30px var(--accent-glow);
      transform: translateY(-2px);
    }
    .card-icon {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: var(--accent-glow);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.75rem;
      color: var(--accent);
    }
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

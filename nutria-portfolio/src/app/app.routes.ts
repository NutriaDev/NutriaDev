import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'admin-login',
    loadComponent: () =>
      import('./pages/admin-login/admin-login.component').then(m => m.AdminLoginComponent)
  },
  {
    path: 'admin',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent)
  },
  {
    path: 'admin/proyectos',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/admin-proyectos/admin-proyectos.component').then(m => m.AdminProyectosComponent)
  },
  {
    path: 'admin/proyectos/nuevo',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/admin-proyectos/project-form/project-form.component').then(m => m.ProjectFormComponent)
  },
  {
    path: 'admin/proyectos/:id',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/admin-proyectos/project-form/project-form.component').then(m => m.ProjectFormComponent)
  },
  {
    path: '',
    loadComponent: () =>
      import('./pages/portfolio/portfolio.component').then(m => m.PortfolioComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

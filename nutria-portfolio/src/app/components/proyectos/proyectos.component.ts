import { Component, inject } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project, PROJECT_STATUS_LABELS } from '../../models/project.model';

interface DisplayProject {
  num: string;
  category: string;
  name: string;
  desc: string;
  tags: string[];
  badge: string;
  image: string | null;
  github: string;
  demo: string;
}

@Component({
  selector: 'app-proyectos',
  standalone: true,
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css',
})
export class ProyectosComponent {
  private projectService = inject(ProjectService);

  projects: DisplayProject[] = [];
  loading = true;
  error = '';

  constructor() {
    this.loadProjects();
  }

private async loadProjects() {
  try {
    const data = await this.projectService.getAll();

    console.log('PROJECTS:', data);

    this.projects = data.map((p, i) => ({
      num: `${(i + 1).toString().padStart(2, '0')} — ${p.category || 'Proyecto'}`,
      category: p.category || 'General',
      name: p.title || '',
      desc: p.description || '',
      tags: p.stack || [],
      badge: PROJECT_STATUS_LABELS[p.status as keyof typeof PROJECT_STATUS_LABELS] || 'Proyecto',
      image: p.image || null,
      github: p.github || '',
      demo: p.demo || '',
    }));

  } catch (err) {
    console.error(err);
    this.error = 'No se pudieron cargar los proyectos';
  } finally {
    this.loading = false;
  }
}
}

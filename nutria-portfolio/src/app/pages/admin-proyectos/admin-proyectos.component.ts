import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project, PROJECT_STATUS_LABELS, ProjectStatus } from '../../models/project.model';

@Component({
  selector: 'app-admin-proyectos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-proyectos.component.html',
  styleUrl: './admin-proyectos.component.css'})
export class AdminProyectosComponent {
  private projectService = inject(ProjectService);
  private router = inject(Router);

  projects: Project[] = [];
  loading = true;
  error = '';

  showDeleteModal = false;
  deletingProject: Project | null = null;
  deleting = false;

  readonly PROJECT_STATUS_LABELS = PROJECT_STATUS_LABELS;

  constructor() {
    this.loadProjects();
  }

  async loadProjects() {
    this.loading = true;
    this.error = '';
    try {
      this.projects = await this.projectService.getAll();
    } catch (err: unknown) {
      this.error = err instanceof Error ? err.message : 'Error al cargar proyectos';
    } finally {
      this.loading = false;
    }
  }

  getStatusStyle(status: ProjectStatus) {
    const styles: Record<ProjectStatus, string> = {
      desarrollo: 'background:rgba(52,152,219,0.12);color:#3498db;border:1px solid rgba(52,152,219,0.25)',
      produccion: 'background:rgba(46,204,113,0.12);color:#2ecc71;border:1px solid rgba(46,204,113,0.25)',
      privado: 'background:rgba(155,89,182,0.12);color:#9b59b6;border:1px solid rgba(155,89,182,0.25)',
    };
    return styles[status];
  }

  async moveUp(proj: Project, index: number) {
    if (index === 0) return;
    const above = this.projects[index - 1];
    try {
      await this.projectService.swapOrder(proj.id!, proj.order_index, above.id!, above.order_index);
      [proj.order_index, above.order_index] = [above.order_index, proj.order_index];
      [this.projects[index], this.projects[index - 1]] = [this.projects[index - 1], this.projects[index]];
    } catch {
      this.loadProjects();
    }
  }

  async moveDown(proj: Project, index: number) {
    if (index === this.projects.length - 1) return;
    const below = this.projects[index + 1];
    try {
      await this.projectService.swapOrder(proj.id!, proj.order_index, below.id!, below.order_index);
      [proj.order_index, below.order_index] = [below.order_index, proj.order_index];
      [this.projects[index], this.projects[index + 1]] = [this.projects[index + 1], this.projects[index]];
    } catch {
      this.loadProjects();
    }
  }

  confirmDelete(proj: Project) {
    this.deletingProject = proj;
    this.showDeleteModal = true;
  }

  cancelDelete() {
    this.showDeleteModal = false;
    this.deletingProject = null;
  }

  async deleteProject() {
    if (!this.deletingProject?.id) return;
    this.deleting = true;
    try {
      if (this.deletingProject.image) {
        await this.projectService.deleteImage(this.deletingProject.image).catch(() => {});
      }
      await this.projectService.delete(this.deletingProject.id);
      this.showDeleteModal = false;
      this.deletingProject = null;
      await this.loadProjects();
    } catch (err: unknown) {
      this.error = err instanceof Error ? err.message : 'Error al eliminar';
    } finally {
      this.deleting = false;
    }
  }
}

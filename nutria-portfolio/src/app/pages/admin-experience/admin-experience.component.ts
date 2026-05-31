import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ExperienceService } from '../../services/experience.service';
import { Experience } from '../../models/experience.model';

@Component({
  selector: 'app-admin-experience',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-experience.component.html',
  styleUrl: './admin-experience.component.css'
})
export class AdminExperienceComponent {
  private experienceService = inject(ExperienceService);
  private router = inject(Router);

  experiences: Experience[] = [];
  loading = true;
  error = '';

  showDeleteModal = false;
  deletingExperience: Experience | null = null;
  deleting = false;

  constructor() {
    this.loadExperiences();
  }

  async loadExperiences() {
    this.loading = true;
    this.error = '';
    try {
      this.experiences = await this.experienceService.getAll();
    } catch (err: unknown) {
      this.error = err instanceof Error ? err.message : 'Error al cargar experiencias';
    } finally {
      this.loading = false;
    }
  }

  formatDateRange(exp: Experience): string {
    const start = exp.start_date ? new Date(exp.start_date).getFullYear() : '';
    const end = exp.end_date
      ? exp.end_date === 'presente' ? 'Presente' : new Date(exp.end_date).getFullYear().toString()
      : '';
    if (start && end) return `${start} — ${end}`;
    if (start) return `${start} — Presente`;
    return exp.start_date || '';
  }

  confirmDelete(exp: Experience) {
    this.deletingExperience = exp;
    this.showDeleteModal = true;
  }

  cancelDelete() {
    this.showDeleteModal = false;
    this.deletingExperience = null;
  }

  async deleteExperience() {
    if (!this.deletingExperience?.id) return;
    this.deleting = true;
    try {
      await this.experienceService.delete(this.deletingExperience.id);
      this.showDeleteModal = false;
      this.deletingExperience = null;
      await this.loadExperiences();
    } catch (err: unknown) {
      this.error = err instanceof Error ? err.message : 'Error al eliminar';
    } finally {
      this.deleting = false;
    }
  }
}

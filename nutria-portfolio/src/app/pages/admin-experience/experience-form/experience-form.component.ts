import { Component, inject, signal, computed } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ExperienceService } from '../../../services/experience.service';
import { Experience } from '../../../models/experience.model';

@Component({
  selector: 'app-experience-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './experience-form.component.html',
  styleUrl: './experience-form.component.css'
})
export class ExperienceFormComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private experienceService = inject(ExperienceService);

  loading = true;
  saving = false;
  error = '';

  experienceId = signal<string | null>(null);
  isEdit = computed(() => !!this.experienceId());

  formData: Partial<Experience> = {
    company: '',
    role: '',
    description: '',
    start_date: '',
    end_date: '',
  };

  constructor() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.experienceId.set(id);
      this.loadExperience(id);
    } else {
      this.loading = false;
    }
  }

  private async loadExperience(id: string) {
    try {
      const experience = await this.experienceService.getById(id);
      if (experience) {
        this.formData = { ...experience };
      } else {
        this.error = 'Experiencia no encontrada';
      }
    } catch (err: unknown) {
      this.error = err instanceof Error ? err.message : 'Error al cargar experiencia';
    } finally {
      this.loading = false;
    }
  }

  async save() {
    if (!this.formData.company?.trim()) {
      this.error = 'El nombre de la empresa es obligatorio';
      return;
    }

    this.saving = true;
    this.error = '';

    try {
      const payload: Partial<Experience> = {
        company: this.formData.company.trim(),
        role: this.formData.role?.trim() ?? '',
        description: this.formData.description?.trim() ?? '',
        start_date: this.formData.start_date?.trim() ?? '',
        end_date: this.formData.end_date?.trim() ?? '',
      };

      if (this.isEdit() && this.experienceId()) {
        await this.experienceService.update(this.experienceId()!, payload);
      } else {
        await this.experienceService.create(payload);
      }

      this.router.navigateByUrl('/admin/experiencia');
    } catch (err: unknown) {
      this.error = err instanceof Error ? err.message : 'Error al guardar experiencia';
    } finally {
      this.saving = false;
    }
  }
}
